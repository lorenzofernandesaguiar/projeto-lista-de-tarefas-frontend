import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  imports: [FormsModule],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css'
})
export class EditarTarefaComponent {

  public tarefa: Tarefa = new Tarefa(0, "", false);
  public tarefaService: TarefaService = inject(TarefaService);
  public router: Router = inject(Router);
  public activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {

    // Guarda na constante id o trecho da URL que corresponde ao id da tarefa.
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10);

    // Chama o método buscarTarefaPeloId do componente EditarTarefaComponent. A constante id é
    // passada como parâmetro para esse método
    this.buscarTarefaPeloId(id);

  }

  public buscarTarefaPeloId(id: number) {

    // Chama o método buscarTarefaPeloId do serviço TarefaService
    this.tarefaService.buscarTarefaPeloId(id).subscribe((tarefaBuscada: Tarefa) => {

      // O retorno é guardado na propriedade tarefa pertencente ao componente EditarTarefaComponent
      this.tarefa = tarefaBuscada;

    });

  }

  public editarTarefa() {

    // Chama o método editarTarefa do serviço TarefaService, passando como parâmetro a propriedade
    // tarefa pertencente ao componente EditarTarefaComponent
    this.tarefaService.editarTarefa(this.tarefa).subscribe(() => {

      // Depois de editar a tarefa, navega para a página principal
      this.router.navigate(['']);

    });

  }

}
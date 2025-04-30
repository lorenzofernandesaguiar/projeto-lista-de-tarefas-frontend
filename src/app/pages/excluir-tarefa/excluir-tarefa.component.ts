import { Component, inject } from '@angular/core';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-tarefa',
  imports: [],
  templateUrl: './excluir-tarefa.component.html',
  styleUrl: './excluir-tarefa.component.css'
})
export class ExcluirTarefaComponent {

  public tarefa: Tarefa = new Tarefa(0, "", false);
  public tarefaService: TarefaService = inject(TarefaService);
  public router: Router = inject(Router);
  public activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {

    // Guarda na constante id o trecho da URL que corresponde ao id da tarefa.
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10);

    // Chama o método buscarTarefaPeloId do componente ExcluirTarefaComponent. A constante id é
    // passada como parâmetro para esse método
    this.buscarTarefaPeloId(id);

  }

  public buscarTarefaPeloId(id: number) {

    // Chama o método buscarTarefaPeloId do serviço TarefaService
    this.tarefaService.buscarTarefaPeloId(id).subscribe((tarefaBuscada: Tarefa) => {

      // O retorno é guardado na propriedade tarefa pertencente ao componente ExcluirTarefaComponent
      this.tarefa = tarefaBuscada;

    });

  }

  public excluirTarefa() {

    // Chama o método excluirTarefa do serviço TarefaService, passando como parâmetro a propriedade
    // tarefa pertencente ao componente ExluirTarefaComponent
    this.tarefaService.excluirTarefa(this.tarefa.id).subscribe(() => {

      // Depois de excluir a tarefa, navega para a página principal
      this.router.navigate(['']);

    });

  }

}
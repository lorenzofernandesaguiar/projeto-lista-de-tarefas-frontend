import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-tarefa',
  imports: [FormsModule],
  templateUrl: './adicionar-tarefa.component.html',
  styleUrl: './adicionar-tarefa.component.css'
})
export class AdicionarTarefaComponent {

  public tarefa: Tarefa = new Tarefa(0, "", false);
  public tarefaService: TarefaService = inject(TarefaService);
  public router: Router = inject(Router);

  public adicionarTarefa() {

    // Chama o método adicionarTarefa do serviço TarefaService, passando como parâmetro a
    // propriedade tarefa pertencente ao componente AdicionarTarefaComponent.
    this.tarefaService.adicionarTarefa(this.tarefa).subscribe(() => {

      // Depois de salvar a tarefa no banco de dados, navega para a página principal
      this.router.navigate(['']);

    });

  }

}
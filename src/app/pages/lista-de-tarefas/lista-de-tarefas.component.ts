import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tarefa } from '../../models/tarefa';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-lista-de-tarefas',
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css'
})
export class ListaDeTarefasComponent {

  public listaDeTarefas: Tarefa[] = [];
  public numeroDeTarefas: number = 0;
  public tarefaService: TarefaService = inject(TarefaService);

  constructor() {

    // Chama o método buscarTodasAsTarefas
    this.buscarTodasAsTarefas();

  }

  public buscarTodasAsTarefas() {

    // Chama o método buscarTodasAsTarefas do serviço TarefaService. Isso fará com que a requisição
    // seja enviada
    this.tarefaService.buscarTodasAsTarefas().subscribe((tarefasBuscadas: Tarefa[]) => {

      // Armazena em listaDeTarefas o conteúdo de tarefasBuscadas
      this.listaDeTarefas = tarefasBuscadas;

      // Armazena em numeroDeTarefas o número de itens contidos em tarefasBuscadas
      this.numeroDeTarefas = tarefasBuscadas.length;

    });

  }

  public atualizarPropriedadeConcluida(tarefa: Tarefa) {

    // Altera o valor da propriedade concluida pertencente à tarefa
    if(tarefa.concluida) {
      tarefa.concluida = false;
    } else {
      tarefa.concluida = true;
    }

    // Chama o método editarTarefa do serviço TarefaService, passando como parâmetro a tarefa com a
    // propriedade concluida já atualizada.
    this.tarefaService.editarTarefa(tarefa).subscribe();

  }

}
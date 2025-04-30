import { Observable, of } from "rxjs";
import { mockListaDeTarefas } from "../db/db";
import { Tarefa } from "../models/tarefa";

export class MockTarefaService {

    private tarefas: Tarefa[] = mockListaDeTarefas;

    public buscarTodasAsTarefas(): Observable<Tarefa[]> {

        // Converte o valor da propriedade tarefa da classe MockTarefaService em uma sequência do
        // tipo Observable<Tarefa[]>. O retorno é guardado dentro da constante tarefaObservable.
        // Vale lembrar que, ao ser chamado o método buscarTodasAsTarefas do serviço TarefaService,
        // espera-se que o corpo da resposta HTTP contenha uma lista de tarefas
        const tarefaObservable: Observable<Tarefa[]> = of(this.tarefas);
 
        return tarefaObservable;

    }

    public buscarTarefaPeloId(id: number): Observable<Tarefa> {

        // Acessa a tarefa contida na propriedade tarefas da classe MockTarefaService. Para acessar
        // uma tarefa de id x é preciso navegar para o índice x - 1. Depois de acessar a tarefa
        // específica, converte ela em uma sequência do tipo Observable<Tarefa>. O retorno é
        // guardado na constante tarefaObservable Vale lembrar que, ao ser chamado o método
        // buscarTarefaPeloId do serviço TarefaService, espera-se que o corpo da resposta HTTP
        // contenha a tarefa solicitada
        const tarefaObservable: Observable<Tarefa> = of(this.tarefas[id - 1]);

        return tarefaObservable;

    }

    public adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {

        // Converte o valor do parâmetro tarefa em uma sequência do tipo Observable<Tarefa[]>. O
        // retorno é guardado dentro da constante tarefaObservable. Vale lembrar que, ao ser chamado
        // o método adicionarTarefa do serviço TarefaService, espera-se que o corpo da resposta HTTP
        // contenha a tarefa que foi adicionada
        const tarefaObservable: Observable<Tarefa> = of(tarefa);

        return tarefaObservable;

    }

    public editarTarefa(tarefa: Tarefa): Observable<Tarefa> {

        // Converte o valor do parâmetro tarefa em uma sequência do tipo Observable<Tarefa[]>. O
        // retorno é guardado dentro da constante tarefaObservable. Vale lembrar que, ao ser chamado
        // o método editarTarefa do serviço TarefaService, espera-se que o corpo da resposta HTTP
        // contenha a tarefa que foi editada
        const tarefaObservable: Observable<Tarefa> = of(tarefa);

        return tarefaObservable;

    }

    public excluirTarefa(id: number): Observable<null> {

        // Retorna um Observable<null>. Vale lembrar que, ao ser chamado o método excluirTarefa do
        // serviço TarefaService, espera-se que o corpo da resposta HTTP esteja vazio
        return of(null);

    }

}
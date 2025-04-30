import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private url: string = "http://localhost:8080/tarefas";

  private httpOptions: object = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private httpClient: HttpClient) { }

  public buscarTodasAsTarefas(): Observable<Tarefa[]> {

    // Constrói uma requisição do tipo GET. Essa requisição será direcionada para a URL
    // http://localhost:8080/tarefas. Se a requisição falhar na primeira vez, serão realizadas
    // outras duas tentativas. Caso a falha persista, será chamado o método manipularErro.
    return this.httpClient.get<Tarefa[]>(this.url).pipe(retry(2), catchError(this.manipularErro));

  }

  public buscarTarefaPeloId(id: number): Observable<Tarefa> {

    // Constrói uma requisição do tipo GET. Essa requisição será direcionada para a URL que segue o
    // modelo http://localhost:8080/tarefas/id. Na prática, o trecho id corresponderá ao valor do
    // parâmetro id. Se a requisição falhar na primeira vez, serão realizadas outras duas
    // tentativas. Caso a falha persista, será chamado o método manipularErro.
    return this.httpClient.get<Tarefa>(`${this.url}/${id}`).pipe(retry(2), catchError(this.manipularErro));

  }

  public adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {

    // Constrói uma requisição do tipo POST. Essa requisição será direcionada para a URL 
    // http://localhost:8080/tarefas. O parâmetro tarefa é convertido em JSON e fará parte do corpo
    // da requisição. O uso da propriedade httpOptions especifica o cabeçalho que deve ser incluído
    // na requisição. Se a requisição falhar na primeira vez, serão realizadas outras duas
    // tentativas. Caso a falha persista, será chamado o método manipularErro.
    return this.httpClient.post<Tarefa>(this.url, JSON.stringify(tarefa), this.httpOptions).pipe(retry(2), catchError(this.manipularErro));

  }

  public editarTarefa(tarefa: Tarefa): Observable<Tarefa> {

    // Constrói uma requisição do tipo PUT. Essa requisição será direcionada para a URL que segue o
    // modelo http://localhost:8080/tarefas/id. Na prática, o trecho id corresponderá ao valor da
    // propriedade id do parâmetro tarefa. O parâmetro tarefa é convertido em JSON e fará parte do
    // corpo da requisição. O uso da propriedade httpOptions especifica o cabeçalho que deve ser
    // incluído na requisição. Se a requisição falhar na primeira vez, serão realizadas outras duas
    // tentativas. Caso a falha persista, será chamado o método manipularErro.
    return this.httpClient.put<Tarefa>(`${this.url}/${tarefa.id}`, JSON.stringify(tarefa), this.httpOptions).pipe(retry(2), catchError(this.manipularErro));

  }

  public excluirTarefa(id: number): Observable<null> {

    // Constrói uma requisição do tipo DELETE. Essa requisição será direcionada para a URL que segue
    // o modelo http://localhost:8080/tarefas/id. Na prática, o trecho id corresponderá ao valor do
    // parâmetro id. O uso da propriedade httpOptions especifica o cabeçalho que deve ser incluído
    // na requisição. Se a requisição falhar na primeira vez, serão realizadas outras duas tentativas. Caso a falha persista, será chamado o método manipularErro.
    return this.httpClient.delete<null>(`${this.url}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.manipularErro));

  }

  public manipularErro(erro: HttpErrorResponse): Observable<never> {
    
    // Exibe uma mensagem de erro no console do navegador
    console.log(`Ocorreu um erro! Código do erro: ${erro.status}, mensagem do erro: ${erro.message}`);
    // Retorna uma instância do erro
    return throwError(() => erro);

  }

}
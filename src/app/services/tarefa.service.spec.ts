import { TestBed } from '@angular/core/testing';
import { TarefaService } from './tarefa.service';
import { HttpTestingController, provideHttpClientTesting, TestRequest } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Tarefa } from '../models/tarefa';
import { mockListaDeTarefas } from '../db/db';

describe('TarefaService', () => {

  let httpTestingController: HttpTestingController;
  let tarefaService: TarefaService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        TarefaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    // Faz com que a variável httpTestingController conte com métodos para interagir com o backend
    // de teste
    httpTestingController = TestBed.inject(HttpTestingController);

    // Injeta o serviço TarefaService. O retorno é guardado dentro da variável tarefaService
    tarefaService = TestBed.inject(TarefaService);

  });

  it('deve verificar se o serviço TarefaService foi criado', () => {

    // Verifica se o serviço tarefaService não é undefined
    expect(tarefaService).toBeDefined();

  });

  it('deve verificar se o método buscarTodasAsTarefas está funcionando corretamente', () => {

    // Chama o método buscarTodasAsTarefas do serviço TarefaService. Isso fará com que a requisição
    // seja enviada para o back-end de teste
    tarefaService.buscarTodasAsTarefas().subscribe((tarefas: Tarefa[]) => {

      // Verifica se o corpo da resposta não está vazio
      expect(tarefas).not.toBeNull();

      // Verifica se o corpo da resposta contém cinco tarefas
      expect(tarefas.length).toEqual(5);

      // Verifica se o corpo da resposta é igual a mockListaDeTarefas, pois, através da função 
      // flush, será indicado que o corpo da resposta é igual a mockListaDeTarefas
      expect(tarefas).toEqual(mockListaDeTarefas);

    });

    // Verifica se uma única requisição foi feita para a URL http://localhost:8080/tarefas. O
    // retorno é um mock da referida requisição. Esse retorno é guardado na constante testRequest
    const testRequest: TestRequest = httpTestingController.expectOne("http://localhost:8080/tarefas");

    // Verifica se o corpo da requisição está vazio
    expect(testRequest.request.body).toBeNull();

    // Verifica se a requisição é do tipo GET
    expect(testRequest.request.method).toEqual("GET");

    // Verifica se o front-end da aplicação web espera receber uma resposta do tipo JSON
    expect(testRequest.request.responseType).toEqual("json");

    // Resolve a requisição, indicando que o corpo da resposta é igual a mockListaDeTarefas
    testRequest.flush(mockListaDeTarefas);

  });

  it('deve verificar se o método buscarTarefaPeloId está funcionando corretamente', () => {

    // Chama o método buscarTarefaPeloId do serviço TarefaService, indicando que a tarefa buscada é
    // aquela cujo id é igual a 1. Isso fará com que a requisição seja enviada para o back-end de
    // teste
    tarefaService.buscarTarefaPeloId(1).subscribe((tarefa: Tarefa) => {

      // Verifica se o corpo da resposta não está vazio
      expect(tarefa).not.toBeNull();

      // Verifica se o corpo da resposta é igual a mockListaDeTarefas[0], pois, através da função
      // flush, será indicado que o corpo da resposta é igual a mockListaDeTarefas[0]
      expect(tarefa).toEqual(mockListaDeTarefas[0]);

    });

    // Verifica se uma única requisição foi feita para a URL http://localhost:8080/tarefas/1. O
    // retorno é um mock da referida requisição. Esse retorno é guardado na constante testRequest
    const testRequest: TestRequest = httpTestingController.expectOne("http://localhost:8080/tarefas/1");

    // Verifica se o corpo da requisição está vazio
    expect(testRequest.request.body).toBeNull();

    // Verifica se a requisição é do tipo GET
    expect(testRequest.request.method).toEqual("GET");

    // Verifica se o front-end da aplicação web espera receber uma resposta do tipo JSON
    expect(testRequest.request.responseType).toEqual("json");

    // Resolve a requisição, indicando que o corpo da resposta é igual a mockListaDeTarefas[0]
    testRequest.flush(mockListaDeTarefas[0]);

  });

  it('deve verificar se o método adicionarTarefa está funcionando corretamente', () => {

    // Cria uma tarefa representada pela constante mockTarefa
    const mockTarefa: Tarefa = {

      id: 6,
      descricao: "Arrumar as malas",
      concluida: false

    }

    // Chama o método adicionarTarefa do serviço TarefaService, indicando que a tarefa a ser
    // adicionada é aquela representada pela constante mockTarefa. Isso fará com que a requisição
    // seja enviada para o back-end de teste
    tarefaService.adicionarTarefa(mockTarefa).subscribe((tarefa: Tarefa) => {

      // Verifica se o corpo da resposta não está vazio
      expect(tarefa).not.toBeNull();

      // Verifica se o corpo da resposta é igual a mockTarefa, pois, através da função flush, será
      // indicado que o corpo da resposta é igual a mockTarefa
      expect(tarefa).toEqual(mockTarefa);

    });

    // Verifica se uma única requisição foi feita para a URL http://localhost:8080/tarefas. O
    // retorno é um mock da referida requisição. Esse retorno é guardado na constante testRequest
    const testRequest: TestRequest = httpTestingController.expectOne("http://localhost:8080/tarefas");

    // Guarda na constante mockTarefaJson o resultado da conversão da constante mockTarefa para JSON
    const mockTarefaJson = JSON.stringify(mockTarefa)

    // Verifica se o corpo da requisição é igual a mockTarefaJson
    expect(testRequest.request.body).toEqual(mockTarefaJson);

    // Verifica se a requisição é do tipo POST
    expect(testRequest.request.method).toEqual("POST");

    // Verifica se o front-end da aplicação web espera receber uma resposta do tipo JSON
    expect(testRequest.request.responseType).toEqual("json");

    // Resolve a requisição, indicando que o corpo da resposta é igual a mockTarefa
    testRequest.flush(mockTarefa);

  });

  it('deve verificar se o método editarTarefa está funcionando corretamente', () => {

    // Cria uma tarefa representada pela constante mockTarefa
    const mockTarefa: Tarefa = {

      id: 1,
      descricao: "Agendar reunião",
      concluida: true

    };

    // Chama o método editarTarefa do serviço TarefaService, indicando que a tarefa a ser editada é
    // aquela cujo id é igual a 1. Isso fará com que a requisição seja enviada para o back-end de
    // teste
    tarefaService.editarTarefa(mockTarefa).subscribe((tarefa: Tarefa) => {

      // Verifica se o corpo da resposta não está vazio
      expect(tarefa).not.toBeNull();

      // Verifica se o corpo da resposta é igual a mockTarefa, pois, através da função flush, será
      // indicado que o corpo da resposta é igual a mockTarefa
      expect(tarefa).toEqual(mockTarefa);

    });

    // Verifica se uma única requisição foi feita para a URL http://localhost:8080/tarefas/1. O
    // retorno é um mock da referida requisição. Esse retorno é guardado na constante testRequest
    const testRequest: TestRequest = httpTestingController.expectOne("http://localhost:8080/tarefas/1");

    // Guarda na constante mockTarefaJson o resultado da conversão da constante mockTarefa para JSON
    const mockTarefaJson = JSON.stringify(mockTarefa);

    // Verifica se o corpo da requisição é igual a mockTarefaJson
    expect(testRequest.request.body).toEqual(mockTarefaJson);

    // Verifica se a requisição é do tipo PUT
    expect(testRequest.request.method).toEqual("PUT");

    // Verifica se o front-end da aplicação web espera receber uma resposta do tipo JSON
    expect(testRequest.request.responseType).toEqual("json");

    // Resolve a requisição, indicando que o corpo da resposta é igual a mockTarefa
    testRequest.flush(mockTarefa);

  });

  it('deve verificar se o método excluirTarefa está funcionando corretamente', () => {

    // Chama o método excluirTarefa do serviço TarefaService, indicando que a tarefa a ser excluída
    // é aquela cujo id é igual a 1. Isso fará com que a requisição seja enviada para o back-end de
    // teste
    tarefaService.excluirTarefa(1).subscribe();

    // Verifica se uma única requisição foi feita para a URL http://localhost:8080/tarefas/1. O
    // retorno é um mock da referida requisição. Esse retorno é guardado na constante testRequest
    const testRequest: TestRequest = httpTestingController.expectOne("http://localhost:8080/tarefas/1");

    // Verifica se o corpo da requisição está vazio
    expect(testRequest.request.body).toBeNull();

    // Verifica se a requisição é do tipo DELETE
    expect(testRequest.request.method).toEqual("DELETE");

    // Verifica se o front-end da aplicação web espera receber uma resposta do tipo JSON
    expect(testRequest.request.responseType).toEqual("json");

    // Resolve a requisição, indicando que o corpo da resposta é vazio
    testRequest.flush(null);

  });

  afterEach(() => {

    // Verifica se não há solicitações pendentes
    httpTestingController.verify();

  });

});
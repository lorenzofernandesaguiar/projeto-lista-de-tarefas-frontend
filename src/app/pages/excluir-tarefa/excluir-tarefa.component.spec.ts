import { TestBed } from '@angular/core/testing';
import { ExcluirTarefaComponent } from './excluir-tarefa.component';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { appConfig } from '../../app.config';
import { provideRouter } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { MockTarefaService } from '../../mocks/mocktarefaservice';

describe('ExcluirTarefaComponent', () => {

  let routerTestingHarness: RouterTestingHarness;
  let component: ExcluirTarefaComponent;
  let html: HTMLElement;

  beforeEach(async () => {

    TestBed.configureTestingModule(
    
      Object.assign({}, appConfig, {
        imports: [ExcluirTarefaComponent],
        providers: [
          provideHttpClient(),
          provideHttpClientTesting(),
          provideRouter([
            {path: 'excluir/:id', component: ExcluirTarefaComponent}
          ]),
          {provide: TarefaService, useClass: MockTarefaService}
        ]
      })

    );

    // Faz com que a constante routerTestingHarness conte com propriedades e métodos para que sejam
    // testados componentes roteados
    routerTestingHarness = await RouterTestingHarness.create();
    
    // Guarda na variável component a instância do componente EditarTarefaComponent, tomando como
    // base a URL http://localhost:4200/excluir/4
    component = await routerTestingHarness.navigateByUrl('/excluir/4', ExcluirTarefaComponent);

    // Faz com que a variável html conte com propriedades e métodos para que sejam testados os
    // elementos HTML do template do componente EditarTarefaComponent
    html = routerTestingHarness.fixture.nativeElement as HTMLElement;

    // Detecta mudanças no componente EditarTarefaComponent
    routerTestingHarness.fixture.detectChanges();

  });

  it('deve verificar se o componente ExcluirTarefaComponent foi criado', () => {

    // Verifica se o componente ExcluirTarefaComponent não é undefined
    expect(component).toBeDefined();

  });

  it('deve verificar se parágrafo exibe o texto correto', () => {

    // Guarda na constante p o elemento p do template do componente ExcluirTarefaComponent
    const p: HTMLParagraphElement = html.querySelector('p')!;

    // Verifica se o texto contido dentro da constante p é igual ao texto Clique em Confirmar para
    // excluir a tarefa Comprar presente
    expect(p.textContent).toEqual('Clique em Confirmar para excluir a tarefa Comprar presente');

  });

});
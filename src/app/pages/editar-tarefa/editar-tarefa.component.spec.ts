import { TestBed } from '@angular/core/testing';
import { EditarTarefaComponent } from './editar-tarefa.component';
import { RouterTestingHarness } from '@angular/router/testing';
import { appConfig } from '../../app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { MockTarefaService } from '../../mocks/mocktarefaservice';

describe('EditarTarefaComponent', () => {

  let routerTestingHarness: RouterTestingHarness;
  let component: EditarTarefaComponent;
  let html: HTMLElement;

  beforeEach(async () => {

    TestBed.configureTestingModule(

      Object.assign({}, appConfig, {
        imports: [EditarTarefaComponent],
        providers: [
          provideHttpClient(),
          provideHttpClientTesting(),
          provideRouter([
            {path: 'editar/:id', component: EditarTarefaComponent}
          ]),
          {provide: TarefaService, useClass: MockTarefaService}
        ]
      })

    );

    // Faz com que a constante routerTestingHarness conte com propriedades e métodos para que sejam
    // testados componentes roteados
    routerTestingHarness = await RouterTestingHarness.create();
    
    // Guarda na variável component a instância do componente EditarTarefaComponent, tomando como
    // base a URL http://localhost:4200/editar/3
    component = await routerTestingHarness.navigateByUrl('/editar/3', EditarTarefaComponent);

    // Faz com que a variável html conte com propriedades e métodos para que sejam testados os
    // elementos HTML do template do componente EditarTarefaComponent
    html = routerTestingHarness.fixture.nativeElement as HTMLElement;

    // Detecta mudanças no componente EditarTarefaComponent
    routerTestingHarness.fixture.detectChanges();

  });

  it('deve verificar se o componente EditarTarefaComponent foi criado', () => {

    // Verifica se o componente EditarTarefaComponent não é undefined
    expect(component).toBeDefined();

  });

  it('deve verificar se o texto de alerta e o botão Confirmar possuem os comportamentos esperados', () => {

    // Guarda na constante input o campo input no qual o usuário digitará a descrição da tarefa a
    // ser editada
    const input: HTMLInputElement = html.querySelector('input#descricao')!;

    // Guarda na constante textoAlerta o parágrafo que contém o texto de alerta
    const textoAlerta: HTMLParagraphElement = html.querySelector('p.alerta')!;

    // Guarda na constante botaoConfirmar o botão Confirmar
    const botaoConfirmar: HTMLButtonElement = html.querySelector('button.confirmar')!;

    // Verifica se, quando a página acaba de ser carregada, o campo input contém o texto Agendar
    // reunião
    expect(input.value).toEqual('Concluir relatório');

    // Verifica se o texto de alerta está oculto quando a página acaba de ser carregada
    expect(textoAlerta.hidden).toBeTruthy();

    // Verifica se o texto de alerta está desabilitado quando a página acaba de ser carregada
    expect(botaoConfirmar.disabled).toBeTruthy();

    // Altera o valor do campo input para Ar
    input.value = 'Ar';

    // Faz com que o Angular saiba que houve alteração no campo input
    input.dispatchEvent(new Event('input'));

    // Detecta mudanças no componente AdicionarTarefaComponent
    routerTestingHarness.fixture.detectChanges();

    // Verifica se o texto de alerta ficou visível
    expect(textoAlerta.hidden).toBeFalsy();

    // Verifica se o botão Confirmar continua desabilitado
    expect(botaoConfirmar.disabled).toBeTruthy();

    // Altera o valor do campo input para Arrumar as malas
    input.value = 'Arrumar as malas';

    // Faz com que o Angular saiba que houve alteração no campo input
    input.dispatchEvent(new Event('input'));

    // Detecta mudanças no componente AdicionarTarefaComponent
    routerTestingHarness.fixture.detectChanges();

    // Verifica se o texto de alerta voltou a estar oculto
    expect(textoAlerta.hidden).toBeTruthy();

    // Verifica se o botão Confirmar deixou de estar desabilitado
    expect(botaoConfirmar.disabled).toBeFalsy();

  });

});
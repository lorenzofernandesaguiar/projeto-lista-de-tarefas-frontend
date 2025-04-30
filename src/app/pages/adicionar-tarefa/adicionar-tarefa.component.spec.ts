import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarTarefaComponent } from './adicionar-tarefa.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AdicionarTarefaComponent', () => {

  let component: AdicionarTarefaComponent;
  let fixture: ComponentFixture<AdicionarTarefaComponent>;
  let html: HTMLElement;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AdicionarTarefaComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    // Faz com que a variável fixture conte com propriedades e métodos para que o componente
    // AdicionarTarefaComponent seja testado
    fixture = TestBed.createComponent(AdicionarTarefaComponent);

    // Guarda na variável component a instância do componente AdicionarTarefaComponent
    component = fixture.componentInstance;

    // Faz com que a variável html conte com propriedades e métodos para que sejam testados os
    // elementos HTML do template do componente AdicionarTarefaComponent
    html = fixture.nativeElement as HTMLElement;

    // Detecta mudanças no componente AdicionarTarefaComponent
    fixture.detectChanges();

  });

  it('deve verificar se o componente AdicionarTarefaComponent foi criado', () => {

    // Verifica se o componente AdicionarTarefaComponent não é undefined
    expect(component).toBeDefined();

  });

  it('deve verificar se o texto de alerta e o botão Confirmar possuem os comportamentos esperados', () => {

    // Guarda na constante input o campo input no qual o usuário digitará a descrição da tarefa a
    // ser adicionada
    const input: HTMLInputElement = html.querySelector('input#descricao')!;

    // Guarda na constante textoAlerta o parágrafo que contém o texto de alerta
    const textoAlerta: HTMLParagraphElement = html.querySelector('p.alerta')!;

    // Guarda na constante botaoConfirmar o botão Confirmar
    const botaoConfirmar: HTMLButtonElement = html.querySelector('button.confirmar')!;

    // Verifica se o campo input está vazio quando a página acaba de ser carregada
    expect(input.value).toEqual('');

    // Verifica se o texto de alerta está oculto quando a página acaba de ser carregada
    expect(textoAlerta.hidden).toBeTruthy();

    // Verifica se o texto de alerta está desabilitado quando a página acaba de ser carregada
    expect(botaoConfirmar.disabled).toBeTruthy();

    // Altera o valor do campo input para Ar
    input.value = 'Ar';

    // Faz com que o Angular saiba que houve alteração no campo input
    input.dispatchEvent(new Event('input'));

    // Detecta mudanças no componente AdicionarTarefaComponent
    fixture.detectChanges();

    // Verifica se o texto de alerta ficou visível
    expect(textoAlerta.hidden).toBeFalsy();

    // Verifica se o botão Confirmar continua desabilitado
    expect(botaoConfirmar.disabled).toBeTruthy();

    // Altera o valor do campo input para Arrumar as malas
    input.value = 'Arrumar as malas';

    // Faz com que o Angular saiba que houve alteração no campo input
    input.dispatchEvent(new Event('input'));

    // Detecta mudanças no componente AdicionarTarefaComponent
    fixture.detectChanges();

    // Verifica se o texto de alerta voltou a estar oculto
    expect(textoAlerta.hidden).toBeTruthy();

    // Verifica se o botão Confirmar deixou de estar desabilitado
    expect(botaoConfirmar.disabled).toBeFalsy();

  });

});
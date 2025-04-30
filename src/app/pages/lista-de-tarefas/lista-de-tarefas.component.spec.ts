import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeTarefasComponent } from './lista-de-tarefas.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { MockTarefaService } from '../../mocks/mocktarefaservice';

describe('ListaDeTarefasComponent', () => {

  let component: ListaDeTarefasComponent;
  let fixture: ComponentFixture<ListaDeTarefasComponent>;
  let html: HTMLElement;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ListaDeTarefasComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([
          {path: '', component: ListaDeTarefasComponent},
        ]),
        {provide: TarefaService, useClass: MockTarefaService}
      ]
    }).compileComponents();

    // Faz com que a variável fixture conte com propriedades e métodos para que o componente
    // ListaDeTarefasComponent seja testado
    fixture = TestBed.createComponent(ListaDeTarefasComponent);

    // Guarda na variável component a instância do componente ListaDeTarefasComponent
    component = fixture.componentInstance;

    // Faz com que a variável html conte com propriedades e métodos para que sejam testados os
    // elementos HTML do template do componente ListaDeTarefasComponent
    html = fixture.nativeElement as HTMLElement;

    // Detecta mudanças no componente ListaDeTarefasComponent
    fixture.detectChanges();

  });

  it('deve verificar se o componente ListaDeTarefasComponent foi criado', () => {

    // Verifica se o componente ListaDeTarefasComponent não é undefined
    expect(component).toBeDefined();

  });

  it('deve verificar se existem 5 tarefas na lista', () => {

    // Faz uma busca dentro do template do componente ListaDeTarefasComponent e guarda na constante
    // p o elemento p cujo id é qtd-tarefas
    const p: HTMLParagraphElement = html.querySelector('p#qtd-tarefas')!;

    // Verifica se o texto contido dentro da constante p é igual ao texto Quantidade de tarefas na
    // lista: 5
    expect(p.textContent).toBe('Quantidade de tarefas na lista: 5');

  });

  it('deve verificar se existem cinco elementos li', () => {

    // Faz uma busca dentro do template do componente ListaDeTarefasComponent e guarda na constante
    // li todos os elementos li
    const li: NodeListOf<HTMLLIElement> = html.querySelectorAll('li');

    // Verifica se o número de elementos li é igual a cinco
    expect(li.length).toEqual(5);

  });

  it('deve verificar se o primeiro elemento li possui o comportamento esperado', () => {

    // Faz uma busca dentro do template do componente ListaDeTarefasComponent e guarda na constante
    // li todos os elementos li
    const li: NodeListOf<HTMLLIElement> = html.querySelectorAll('li');

    // Guarda na constante liSpan o elemento span pertencente ao primeiro item da lista de tarefas.
    // Vale lembrar que o primeiro item da lista de tarefas corresponde à tarefa de id 1 que foi
    // salva no arquivo db.ts
    const liSpan: HTMLSpanElement = li.item(0).querySelector('span')!;

    // Faz uma busca no primeiro item da lista de tarefas e guarda na constante
    // botaoMarcarComoConcluida o elemento button cujo id é marcar-como-concluida
    const botaoMarcarComoConcluida: HTMLButtonElement = li.item(0).querySelector('button#marcar-como-concluida')!;

    // Verifica se o texto contido dentro da constante liSpan é igual ao texto Agendar reunião
    expect(liSpan.textContent).toEqual('Agendar reunião');

    // Verifica se existe o botão Marcar como concluída para o primeiro item da lista de tarefas
    expect(botaoMarcarComoConcluida).not.toBeNull();

    // Verifica se o primeiro item da lista de tarefas não tem classe
    expect(li.item(0).className).toEqual('');

    // Aciona o evento de clique sobre o botão Marcar como concluída do primeiro item da lista de
    // tarefas
    botaoMarcarComoConcluida.click();

    // Detecta mudanças no componente ListaDeTarefasComponent
    fixture.detectChanges();

    // Verifica se o primeiro item da lista de tarefas passou a ter a classe riscada
    expect(li.item(0).className).toEqual('riscada');

  });

  it('deve verificar se o segundo elemento li possui o comportamento esperado', () => {

    // Faz uma busca dentro do template do componente ListaDeTarefasComponent e guarda na constante
    // li todos os elementos li
    const li: NodeListOf<HTMLLIElement> = html.querySelectorAll('li');

    // Guarda na constante liSpan o elemento span pertencente ao segundo item da lista de tarefas.
    // Vale lembrar que o segundo item da lista de tarefas corresponde à tarefa de id 2 que foi
    // salva no arquivo db.ts
    const liSpan: HTMLSpanElement = li.item(1).querySelector('span')!;

    // Faz uma busca no segundo item da lista de tarefas e guarda na constante
    // botaoMarcarComoNaoConcluida o elemento button cujo id é marcar-como-nao-concluida
    const botaoMarcarComoNaoConcluida: HTMLButtonElement = li.item(1).querySelector('button#marcar-como-nao-concluida')!;

    // Verifica se o texto contido dentro da constante liSpan é igual ao texto Ler um livro
    expect(liSpan.textContent).toEqual('Ler um livro');

    // Verifica se existe o botão Marcar como não concluída para o segundo item da lista de tarefas
    expect(botaoMarcarComoNaoConcluida).not.toBeNull();

    // Verifica se o segundo item da lista de tarefas tem classe a classe riscada
    expect(li.item(1).className).toEqual('riscada');

    // Aciona o evento de clique sobre o botão Marcar como não concluída do segundo item da lista
    // de tarefas
    botaoMarcarComoNaoConcluida.click();

    // Detecta mudanças no componente ListaDeTarefasComponent
    fixture.detectChanges();

    // Verifica se o segundo item da lista de tarefas deixou de ter a classe riscada
    expect(li.item(1).className).toEqual('');

  });

});
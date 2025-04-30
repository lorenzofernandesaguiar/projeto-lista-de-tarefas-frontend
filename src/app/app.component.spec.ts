import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let html: HTMLElement;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    // Faz com que a variável fixture conte com propriedades e métodos para que o componente
    // AppComponent seja testado
    fixture = TestBed.createComponent(AppComponent);

    // Guarda na variável component a instância do componente AppComponent
    component = fixture.componentInstance;
    
    // Faz com que a variável html conte com propriedades e métodos para que sejam testados os
    // elementos HTML do template do componente AppComponent
    html = fixture.nativeElement as HTMLElement;

  });

  it('deve verificar se o componente AppComponent é criado', () => {

    // Verifica se o componente AppComponent não é undefined
    expect(component).toBeDefined();

  });

  it('deve verificar se o cabeçalho do template do component AppComponent contém o texto Lista de tarefas', () => {

    // Guarda na constante h1 o primeiro elemento h1 do template do componente AppComponent.
    const h1: HTMLHeadingElement = html.querySelector('h1')!;

    // Verifica se o texto contido dentro da constante h1 é igual ao texto Lista de tarefas
    expect(h1.textContent).toEqual('Lista de tarefas');

  });

  it('deve verificar se o rodapé do template do component AppComponent contém o texto Desenvolvido por Lorenzo Fernandes Aguiar', () => {

    // Guarda na constante p o primeiro elemento p do template do componente AppComponent
    const p: HTMLParagraphElement = html.querySelector('p')!;

    // Verifica se o texto contido dentro da constante p é igual ao texto Desenvolvido por Lorenzo
    // Fernandes Aguiar
    expect(p.textContent).toEqual('Desenvolvido por Lorenzo Fernandes Aguiar');

  });

});
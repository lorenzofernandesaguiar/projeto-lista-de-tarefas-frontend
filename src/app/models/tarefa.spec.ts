import { Tarefa } from './tarefa';

describe('Tarefa', () => {

  it('deve verificar se é criada uma instância da classe Tarefa', () => {

    // Chama o constructor da classe Tarefa. Depois, verifica se o retorno não é undefined
    expect(new Tarefa(0, "", false)).toBeTruthy();

  });
  
});
export class Tarefa {

    public id: number;
    public descricao: string;
    public concluida: boolean;

    constructor(id: number, descricao: string, concluida: boolean) {
        this.id = id;
        this.descricao = descricao;
        this.concluida = concluida;
    }

}
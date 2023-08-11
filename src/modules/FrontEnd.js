import { Personagem } from "./personagem.js";

export class FrontEnd extends Personagem {
    static tipo = 'Front-end'
    destreza
    static descricao = 'Você tem o meu arco!'
    constructor(nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5)
            return `Dominador do front`

        return super.obterInsignia()
    }
}

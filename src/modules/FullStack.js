import { FrontEnd } from "./FrontEnd.js";
import { BackEnd } from "./BackEnd.js";
import { Personagem } from "./personagem.js";

export class FullStack extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'Full-Stack'
    static descricao = 'Detentor do front e back mágicos!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new FrontEnd(nome, destreza)
        this.ladoMago = new BackEnd(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}
import { Personagem } from "./personagem.js";

export class DataScience extends Personagem {
    
    forca
    static tipo = 'Data-Science'
    static descricao = 'Você será esmagado pela fúria do Gerreiro'

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia(){
        if(this.level >= 7 && this.forca >= 5) {
            return 'Gerrriro furioso'
        }
        return super.obterInsignia();
    }
}
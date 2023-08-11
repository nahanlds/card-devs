import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { BackEnd } from "./modules/BackEnd.js"
import { FrontEnd } from "./modules/FrontEnd.js"
import { FullStack } from "./modules/FullStack.js"
import { DataScience } from "./modules/DataScience.js"

const magaJulia = new BackEnd('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new FrontEnd('Bruno', 7)
const arqueiroMagoChico = new FullStack('Chico', 7, 10, 'ar', 4, 8)
const GerreiroJose = new DataScience('Jose', 8)

const personagens = [magaJulia, arqueiroBruno, arqueiroMagoChico, GerreiroJose]

new PersonagemView(personagens).render()


import Fundo from "./components/Fundo";
import Perguntas from "./components/Perguntas/Perguntas";
import Topo from "./components/Topo";

export default function Conteudo() {
    return(
        <div className="conteudo ">
            <Topo/>
            <Perguntas/>
            <Fundo/>
        </div>
    )
}
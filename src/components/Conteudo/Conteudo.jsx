import Fundo from "./components/Fundo";
import Perguntas from "./components/Perguntas/Perguntas";
import Topo from "./components/Topo";

import React from "react"

export default function Conteudo() {

    const [contador, setContador] = React.useState(0)

    function atualizarContador(estado) {
        if (estado === "naoLembrei" || "quaseNaoLembrei" || "zap") {
            setContador(contador + 1)
        }
    }

    return(
        <div className="conteudo ">
            <Topo/>
            <Perguntas atualizarContador={atualizarContador}/>
            <Fundo contador={contador}/>
        </div>
    )
}
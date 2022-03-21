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

    const [icones, setIcones] = React.useState([])

    function atualizarIcones(estado) {
        let icone = ""
        let classe = ""

        if (estado === "naoLembrei") {
            icone = "close-circle"
            classe = "nao-lembrei"
        } else if (estado === "quaseNaoLembrei") {
            icone = "help-circle"
            classe = "quase-nao-lembrei"
        } else {
            icone = "checkmark-circle"
            classe = "zap"
        }

        setIcones([...icones, {nome: icone, classe: classe, key: icones.length}])
    }

    return(
        <div className="conteudo escondido">
            <Topo/>
            <Perguntas atualizarContador={atualizarContador} atualizarIcones={atualizarIcones}/>
            <Fundo contador={contador} icones={icones}/>
        </div>
    )
}
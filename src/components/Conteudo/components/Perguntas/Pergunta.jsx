import React from "react"

export default function Pergunta({pergunta, indice, atualizarContador}) {

    const [conteudo, setConteudo] = React.useState("conteudoEscondido")

    let classeFlashcard = "pergunta"
    let classeAvaliacao = "avaliacao escondido"
    let texto = `Pergunta ${indice}`
    let icone = "play-outline"
    let estado = ""

    if (conteudo === "conteudoEscondido") {
        estado = "questao"
    } else if (conteudo === "questao") {
        classeFlashcard = "QeR"
        classeAvaliacao = "avaliacao escondido"
        texto = pergunta.Q
        icone = "repeat-outline"
        estado = "resposta"
    } else if (conteudo === "resposta") {
        classeFlashcard = "QeR"
        classeAvaliacao = "avaliacao"
        texto = pergunta.R
        icone = "repeat-outline"
    } else if (conteudo === "naoLembrei") {
        classeFlashcard = "pergunta nao-lembrei"
        classeAvaliacao = "avaliacao escondido"
        texto = `Pergunta ${indice}`
        icone = "close-circle"
        estado = "naoLembrei"
    } else if (conteudo === "quaseNaoLembrei") {
        classeFlashcard = "pergunta quase-nao-lembrei"
        classeAvaliacao = "avaliacao escondido"
        texto = `Pergunta ${indice}`
        icone = "help-circle"
        estado = "quaseNaoLembrei"
    } else if (conteudo === "zap") {
        classeFlashcard = "pergunta zap"
        classeAvaliacao = "avaliacao escondido"
        texto = `Pergunta ${indice}`
        icone = "checkmark-circle"
        estado = "zap"
    }

    return(
        <li className={classeFlashcard}>
            <p>{texto}</p>
            <ion-icon name={icone} onClick={() => {setConteudo(estado)}}></ion-icon>
            <div className={classeAvaliacao}>
                <button onClick={() => {setConteudo("naoLembrei"); atualizarContador("naoLembrei")}}>Não lembrei</button>
                <button onClick={() => {setConteudo("quaseNaoLembrei"); atualizarContador("quaseNaoLembrei")}}>Quase não lembrei</button>
                <button onClick={() => {setConteudo("zap"); atualizarContador("zap")}}>Zap!</button>
            </div>
        </li>
    )
}
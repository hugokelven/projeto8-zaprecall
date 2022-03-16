export default function Pergunta({pergunta, indice}) {
    function exibirQuestao() {
        alert("Ainda não sei como usar this aqui")
    }

    return(
        <li className="pergunta">
            <p>Pergunta {indice}</p>
            <ion-icon name="play-outline" onClick={exibirQuestao}></ion-icon>
        </li>
    )
}
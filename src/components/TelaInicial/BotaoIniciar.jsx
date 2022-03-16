export default function BotaoIniciar() {
    function exibirConteudo() {
        const telaInicial = document.querySelector(".tela-inicial")
        const conteudo = document.querySelector(".conteudo")

        telaInicial.classList.add("escondido")
        conteudo.classList.remove("escondido")
    }

    return(
        <button onClick={exibirConteudo}>Iniciar Recall!</button>
    )
}
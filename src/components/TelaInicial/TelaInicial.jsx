import BotaoIniciar from "./BotaoIniciar";

export default function TelaInicial() {
    return(
        <div className="tela-inicial">
            <img src="assets/logo.png" alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <BotaoIniciar/>
        </div>
    )
}
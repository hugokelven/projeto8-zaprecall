import BotaoIniciar from "./BotaoIniciar";

import Logo from "./../../assets/logo.png"

export default function TelaInicial() {
    return(
        <div className="tela-inicial">
            <img src={Logo} alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <BotaoIniciar/>
        </div>
    )
}
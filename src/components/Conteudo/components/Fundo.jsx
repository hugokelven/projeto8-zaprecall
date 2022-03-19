export default function Fundo({ contador, icones }) {

    const classes = { fundo: "centralizar-conteudo", mensagem: "mensagem escondido" }

    let mensagemFinal = {
        titulo: "",
        imagem: { src: "", alt: "" },
        texto: ""
    }

    const mensagens = {
        parabens: {
            imagem: { src: "assets/party.png", alt: "Emoji Festejando" },
            titulo: "PARABÉNS!",
            texto: "Você não esqueceu de nenhum flashcard!"
        },
        putz: {
            imagem: { src: "assets/sad.png", alt: "Emoji Triste" },
            titulo: "PUTZ!",
            texto: "Ainda faltaram alguns... Mas não desanime!"
        }
    }

    if (contador === 8) {

        classes.fundo = "centralizar-conteudo finalizado"
        classes.mensagem = "mensagem"

        if (validarAprendizado(icones)) {
            mensagemFinal = mensagens.parabens
        } else {
            mensagemFinal = mensagens.putz
        }
    }

    function validarAprendizado(icones) {
        return (!icones.some(icone => icone.nome === "close-circle"))
    }



    return (
        <footer className={classes.fundo}>
            <div className={classes.mensagem}>
                <span className="centralizar-conteudo">
                    <img src={mensagemFinal.imagem.src} alt={mensagemFinal.imagem.alt} />
                    <h3>{mensagemFinal.titulo}</h3>
                </span>
                <p>{mensagemFinal.texto}</p>
            </div>

            <div>
                {contador}/8 concluídos
            </div>

            <div className="resultado-icones">
                {icones.map(icone => <span className={icone.classe}><ion-icon name={icone.nome}></ion-icon></span>)}
            </div>
        </footer>
    )
}
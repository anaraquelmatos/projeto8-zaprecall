import { useState } from "react";

function PerguntasEstados({ pergunta, index, descricao, resposta }) {

    const [estado, setEstado] = useState("visivel");
    const [selecionado, setSelecionado] = useState(false);
    const vermelho = `vermelho ${selecionado ? "caixa-pergunta-fechada" : ""}`;
    const laranja = `alaranjado ${selecionado ? "caixa-pergunta-fechada" : ""}`;
    const verde = `verde ${selecionado ? "caixa-pergunta-fechada" : ""}`;

    pergunta = "Pergunta";

    if (estado === "visivel") {
        return (
            <div className="caixa-pergunta" onClick={() => setEstado("perguntas")}>
                <h3>{pergunta} {index}</h3>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        );
    } else if (estado === "perguntas") {
        return (
            <div className="caixa-pergunta-visivel">
                <p className="pergunta">{descricao}</p>
                <div className="caixa-pergunta-visivel-seta">
                    <img src="assets/img/setinha.png" alt="Próxima etapa" onClick={() => setEstado("botoes")} />
                </div>
            </div>
        );
    } else if (estado === "botoes") {
        return (
            <div className="caixa-pergunta-final">
                <p className="pergunta">{resposta}</p>
                <div className="caixa-pergunta-visivel-botoes" >
                    <div className="botao-vermelho" onClick={() => setEstado("fechadoVermelho")}>
                        <button className={vermelho} onClick={() => { setSelecionado(!selecionado) }}>Não lembrei</button>
                    </div>
                    <div className="botao-alaranjado" onClick={() => setEstado("fechadoLaranja")}>
                        <button className={laranja} onClick={() => { setSelecionado(!selecionado) }}>Quase não lembrei</button>
                    </div>
                    <div className="botao-verde" onClick={() => setEstado("fechadoVerde")}>
                        <button className={verde} onClick={() => { setSelecionado(!selecionado) }}>Zap!</button>
                    </div>
                </div>
            </div>
        );
    } else if (estado === "fechadoVermelho") {
        return (
            <div className="caixa-pergunta-linha-vermelha" >
                <h3>{pergunta} {index}</h3>
                <ion-icon name="close-circle"></ion-icon>
            </div>
        );
    } else if (estado === "fechadoLaranja") {
        return (
            <div className="caixa-pergunta-linha-alaranjado">
                <h3>{pergunta} {index}</h3>
                <ion-icon name="help-circle"></ion-icon>
            </div>
        );
    }
    else if (estado === "fechadoVerde") {
        return (
            <div className="caixa-pergunta-linha-verde">
                <h3>{pergunta} {index}</h3>
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        );
    }
}


export default PerguntasEstados;
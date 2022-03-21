import Perguntas from "./Perguntas";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import {useState} from "react";

function FlashCards() {

    const [total, setTotal] = useState(0);
    const [icon, setIcon] = useState("");
    const [texto, setTexto] = useState("");
    const [complemento, setComplemento] = useState("");

    return (
        <>
            <Cabecalho />
            <div className="tela">
                <Perguntas total={total} setTotal={setTotal} setIcon={setIcon} setTexto={setTexto} setComplemento={setComplemento}/>
            </div>
            <Rodape total={total} icon={icon} texto={texto} complemento={complemento}/>
        </>
    );

}

export default FlashCards;
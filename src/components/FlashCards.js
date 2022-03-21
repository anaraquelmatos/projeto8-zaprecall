import Perguntas from "./Perguntas";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import {useState} from "react";

function FlashCards() {

    const [total, setTotal] = useState(0);

    return (
        <>
            <Cabecalho />
            <div className="tela">
                <Perguntas total={total} setTotal={setTotal}/>
            </div>
            <Rodape total={total}/>
        </>
    );

}

export default FlashCards;
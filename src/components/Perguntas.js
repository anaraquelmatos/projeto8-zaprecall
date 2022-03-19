import Pergunta from "./Pergunta";

const perguntas = [
    {
        pergunta: "Pergunta 1"
    },
    {
        pergunta: "Pergunta 2"
    },
    {
        pergunta: "Pergunta 3"
    },
    {
        pergunta: "Pergunta 4"
    },
    {
        pergunta: "Pergunta 5"
    },
    {
        pergunta: "Pergunta 6"
    },
    {
        pergunta: "Pergunta 7"
    },
    {
        pergunta: "Pergunta 8"
    }

];

function Perguntas() {

    return (
        <main>
            <div className="caixa-pergunta">
                {
                    perguntas.map((card) => {
                        return <Pergunta key={card.pergunta} pergunta={card.pergunta} />;
                    })
                }
            </div>
        </main>
    );

}

export default Perguntas;
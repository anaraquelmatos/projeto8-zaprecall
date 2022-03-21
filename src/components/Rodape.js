const vetor = [];
let cont = 0;
let img;

function Rodape({ total, icon, texto, complemento }) {

    if (icon === "vermelho") {

        vetor.push(<ion-icon name="close-circle"></ion-icon>);
        cont++;

    } else if (icon === "laranja") {

        vetor.push(<ion-icon name="help-circle"></ion-icon>);

    } else if (icon === "verde") {

        vetor.push(<ion-icon name="checkmark-circle"></ion-icon>);

    }
    if (cont === 0 && total === 8) {
        img = <img src="assets/img/party.png" alt="Putz" />;
        complemento = `Parabéns!`
        texto = `
        Você não esqueceu de nenhum 
        flashcard!`
    } else if (cont !== 0 && total === 8){
        img = <img src="assets/img/sad.png" alt="Putz" />;
        complemento = `Putz...`
        texto = `
        Ainda faltam alguns...
        Mas não desanime!
        `
    }

return (

    <footer>
        <div className="rodape-conteudo espaco">
        <div className="rodape-mensagem-final espaco negrito">{img} {complemento}</div>
                <div className="rodape-mensagem-final espaco">{texto}</div>
            <p>{total}/8 CONCLUÍDOS</p>
            <div>
                {vetor}
            </div>
        </div>
    </footer>
);


}

export default Rodape;
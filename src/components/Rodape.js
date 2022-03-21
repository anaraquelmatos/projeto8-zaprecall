const vetor = [];
let cont = 0;
let img;

function Rodape({ total, icon, texto }) {

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
        texto = `
        Parabéns!
        Você não esqueceu de nenhum 
        flashcard!`
    } else if (cont !== 0 && total === 8){
        img = <img src="assets/img/sad.png" alt="Putz" />;
        texto = `
        Putz...
        Ainda faltam alguns...
        Mas não desanime!`

    }


return (

    <footer>
        <div className="rodape-conteudo">
            <div>
                {img}
                {texto}
            </div>
            <p>{total}/8 CONCLUÍDOS</p>
            <div>
                {vetor}
            </div>
        </div>
    </footer>
);


}

export default Rodape;
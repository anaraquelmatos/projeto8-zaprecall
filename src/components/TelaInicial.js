import React from "react";

function TelaInicial() {

    const [visivel, setVisivel] = React.useState(true);

    return visivel ? (
        <section className=" tela tela-inicial">
            <img src="assets/img/logo.png" alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>
        </section>
    ) : (
        <></>
    );
}

export default TelaInicial;
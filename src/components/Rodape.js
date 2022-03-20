function Rodape({total}) {

    total = 0;
    
    return (
        <footer>
            <div className="rodape-conteudo">
                <p>{total}/8 CONCLUÍDOS</p>
            </div>
        </footer>
    );
}

export default Rodape;
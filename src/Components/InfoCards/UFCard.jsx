function UFCard(props) {
    console.log("test")
    return (
        <div className="info-card">
            <div className="info-container">
                <h2 className='info-container__title'>{props.nome}</h2>
                <p>{`Estado da Região ${props.regiao} do Brasil`}</p>
                <div className="card-info">
                    <div className="card-info__div">
                        <strong className="card-info__label">Região: </strong><span>{props.regiao}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Número de Municípios: </strong><span>{props.numberOfCities}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">UF: </strong><span>{props.sigla}</span>
                    </div>
                </div>
            </div>


            <div className="info-card__chart">
                <img src={`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${props.sigla}`} alt="uf-chart" />
            </div>

        </div>
    )
}

export default UFCard
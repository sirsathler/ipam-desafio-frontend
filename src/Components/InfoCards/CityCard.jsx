function CityCard(props) {
    return (
        <div className="info-card info-card--city">
            <div className="info-container">
                <h2 className='info-container__title'>{props.nome}</h2>
                <p>{`Município do Estado: ${props.uf}`}</p>
                <div className="card-info">
                    <div className="card-info__div">
                        <strong className="card-info__label">Microregião: </strong><span>{props.microregion}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Mesoregião: </strong><span>{props.mesoregion}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Região do Município: </strong><span>{props.region}</span>
                    </div>
                </div>
            </div>

            <div className="info-card__chart">
                <img src={`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${props.id}`} alt="city-chart" />
            </div>

        </div>
    )
}

export default CityCard
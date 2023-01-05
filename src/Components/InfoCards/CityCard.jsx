import { useSelector } from "react-redux"

function CityCard() {
    const selectedCity = useSelector(state =>  state.selectedCity)

    return (
        <div className="info-card info-card--city">
            <div className="info-container">
                <h2 className='info-container__title'>{selectedCity.nome}</h2>
                <p>{`Município de ${selectedCity.microrregiao.nome}`}</p>
                <div className="card-info">
                    <div className="card-info__div">
                        <strong className="card-info__label">Microregião: </strong><span>{selectedCity.microrregiao.nome}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Mesoregião: </strong><span>{selectedCity.microrregiao.mesorregiao.nome}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Região do Município: </strong><span>{selectedCity["regiao-imediata"].nome}</span>
                    </div>
                </div>
            </div>

            <div className="info-card__chart">
                <img src={`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${selectedCity.id}`} alt="city-chart" />
            </div>

        </div>
    )
}

export default CityCard
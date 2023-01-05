import { useSelector } from "react-redux"

function UFCard() {
    const selectedUF = useSelector(state =>  state.selectedUF)
    
    return (
        <div className="info-card">
            <div className="info-container">
                <h2 className='info-container__title'>{selectedUF.nome}</h2>
                <p>{`Estado da Região ${selectedUF.regiao.nome} do Brasil`}</p>
                <div className="card-info">
                    <div className="card-info__div">
                        <strong className="card-info__label">Região: </strong><span>{selectedUF.regiao.nome}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">Número de Municípios: </strong><span>{selectedUF.numberOfCities}</span>
                    </div>
                    <div className="card-info__div">
                        <strong className="card-info__label">UF: </strong><span>{selectedUF.sigla}</span>
                    </div>
                </div>
            </div>


            <div className="info-card__chart">
                <img src={`https://servicodados.ibge.gov.br/api/v3/malhas/estados/${selectedUF.sigla}`} alt="uf-chart" />
            </div>

        </div>
    )
}

export default UFCard
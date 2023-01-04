import './UFInfo.scss'
import '../../Global/CommonClasses.scss'

function UFInfo(props) {
    console.log(props)
    if (props.nome) {
        return (
            <div className="info-card">
                <div className="info-container">
                    <h2 className='info-container__uf-name'>{props.nome}</h2>
                    <p>{`Estado da Região ${props.regiao} do Brasil`}</p>
                    <div className="region-info">
                        <div className="region-info__div">
                            <strong className="region-info__label">Região: </strong><span>{props.regiao}</span>
                        </div>
                        <div className="region-info__div">
                            <strong className="region-info__label">Número de Municípios: </strong><span>{props.numberOfCities}</span>
                        </div>
                        <div className="region-info__div">
                            <strong className="region-info__label">UF: </strong><span>{props.sigla}</span>
                        </div>
                    </div>
                </div>

                <div className="uf-image">
                    {/* <img src={props.uf.image} alt="uf-image" /> */}
                </div>
            </div>
        )
    }
}

export default UFInfo
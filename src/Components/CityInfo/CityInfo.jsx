import '../../Global/CommonClasses.scss'

function cityInfo(props) {
    console.log(props)
    if (props.nome) {
        return (
            <div className="info-card">
                <div className="info-container">
                    <h2 className='info-container__city-name'>{props.nome}</h2>
                    <p>{`Município do Estado: ${props.uf}`}</p>
                    <div className="region-info">
                        <div className="region-info__div">
                            <strong className="region-info__label">Microregião: </strong><span>{props.microregion}</span>
                        </div>
                        <div className="region-info__div">
                            <strong className="region-info__label">Mesoregião: </strong><span>{props.mesoregion}</span>
                        </div>
                        <div className="region-info__div">
                            <strong className="region-info__label">Região do Município: </strong><span>{props.region}</span>
                        </div>
                    </div>
                </div>

                <div className="city-image">
                    {/* <img src={props.city.image} alt="city-image" /> */}
                </div>
            </div>
        )
    }
}

export default cityInfo
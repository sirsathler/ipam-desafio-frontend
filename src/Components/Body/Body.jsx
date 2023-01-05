import './Body.scss'

import { useEffect, useState } from "react"
import { fetchCityInfo, fetchUFInfo, getCityList, getUFList } from "../../Services/APIService";
import Selector from "../Selector/Selector";
import UFCard from '../InfoCards/UFCard';
import CityCard from '../InfoCards/CityCard';

import { useDispatch } from 'react-redux';
import { selectCity, selectUF } from '../../Redux/Actions/Selector.actions';


function Body() {
    const [ufList, setUFList] = useState([])
    const [cityList, setcityList] = useState([])

    const [uf, setUF] = useState()
    const [city, setCity] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUF = async () => {
            const ufs = await getUFList()
            setUFList(ufs)
        }

        fetchUF()
    }, [])

    const handleChange = async (e) => {
        const ufSelected = await fetchUFInfo(e.target.value)
        const cities = await getCityList(ufSelected.sigla)
        setUF(ufSelected)
        setcityList(cities)
        setCity("")

        dispatch(selectUF(ufSelected))
    }

    const showCityInfo = async (e) => {
        const cityInfo = await fetchCityInfo(e.target.value)
        setCity(cityInfo)

        dispatch(selectCity(cityInfo))
        return
    }

    if (ufList.length > 0) {
        return (
            <>
                <div className="selectors-form">
                    <Selector label="Estados" menuItems={ufList} handleChange={handleChange} type="uf" />
                    {
                        cityList.length > 0 &&
                        <Selector label="Cidade" menuItems={cityList} handleChange={showCityInfo} type="ct" />
                    }
                </div>
                {
                    uf &&
                    <UFCard />
                }
                {
                    city &&
                    <CityCard />
                    // nome={city.nome}
                    // region={uf.regiao.nome}
                    // uf={uf.nome}
                    // microregion={city.municipio.microrregiao.nome}
                    // mesoregion={city.municipio.microrregiao.mesorregiao.nome}
                    // id={city.municipio.id}
                }
            </>
        )
    }
}

export default Body;
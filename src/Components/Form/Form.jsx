import './Form.scss'

import { useEffect, useState } from "react"
import { fetchCityInfo, fetchUFInfo, getCityList, getUFList } from "../../Services/APIService";
import Selector from "../Selector/Selector";
import UFInfo from '../UFInfo/UFInfo';


function Form() {
    const [ufList, setUFList] = useState([])
    const [cityList, setcityList] = useState([])

    const [uf, setUF] = useState()
    const [city, setCity] = useState()

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
    }

    const showCityInfo = async (e) => {
        const cityInfo = await fetchCityInfo(e.target.value)
        setCity(cityInfo)
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
                    <UFInfo nome={uf.nome} sigla={uf.regiao.sigla} regiao={uf.regiao.nome} />
                }
            </>
        )
    }
}

export default Form;
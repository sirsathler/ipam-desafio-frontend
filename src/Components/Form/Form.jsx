import './Form.scss'

import { useEffect, useState } from "react"
import { fetchCityInfo, getCityList, getUFList } from "../../Services/APIService";
import Selector from "../Selector/Selector";


function Form() {
    const [ufList, setUFList] = useState([])
    const [cityList, setcityList] = useState([])
    const [city, setCity] = useState([])

    useEffect(() => {
        const fetchUF = async () => {
            const ufs = await getUFList()
            setUFList(ufs)
        }

        fetchUF()
    }, [])

    const handleChange = async (e) => {
        const ufSelected = e.target.value
        const cities = await getCityList(ufSelected)
        setcityList(cities)
    }

    const showCityInfo = async (e) => {
        const cityInfo = await fetchCityInfo(e.target.value)
        console.log(cityInfo)
        setCity(cityInfo)
        return
    }

    if (ufList.length > 0) {
        return (
            <div className="selectors-form">
                <Selector label="Estados" menuItems={ufList} handleChange={handleChange} type="uf" />
                {
                    cityList.length != 0 &&
                    <Selector label="Cidade" menuItems={cityList} handleChange={showCityInfo} type="ct" />
                }
            </div>
        )
    }
}

export default Form;
import axios from "axios";

export async function getUFList() {
    try {
        const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}

export async function getCityList(uf) {
    try {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}

export async function fetchUFInfo(uf) {
    try {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}

export async function fetchCityInfo(cityId) {
    try {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityId}`)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}
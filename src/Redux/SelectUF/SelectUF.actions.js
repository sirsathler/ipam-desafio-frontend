import { getCityList } from '../../Services/APIService'

export async function selectUF(selectedUF) {
    const cityList = await getCityList(selectedUF)
    return {
        type: 'SELECT_UF',
        payload: cityList
    }
}
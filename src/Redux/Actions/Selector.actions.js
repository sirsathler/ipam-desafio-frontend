export function selectUF(uf) {
    return {
        type: 'SELECT_UF',
        payload: uf
    }
}

export function selectCity(city) {
    return {
        type: 'SELECT_CITY',
        payload: city
    }
}
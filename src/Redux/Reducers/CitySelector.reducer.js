export default function (state = {}, action) {
    switch (action.type) {
        case 'SELECT_CITY':
            return action.payload
        default:
            return state
    }
}
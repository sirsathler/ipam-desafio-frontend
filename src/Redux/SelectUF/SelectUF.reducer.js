export default function (state = [], action) {
    switch (action.type) {
        case 'SELECT_UF':
            return action.payload

        default:
            return state
    }
}
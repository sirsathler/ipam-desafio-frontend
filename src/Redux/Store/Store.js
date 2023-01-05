import { createStore, combineReducers } from "redux";
import SelectorReducer from "../Reducers/Selector.reducer";

const rootReducer = combineReducers({
    selector: SelectorReducer
})

const store = createStore(rootReducer)

export default store
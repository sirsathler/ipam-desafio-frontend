import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CitySelectorReducer from "../Reducers/CitySelector.reducer";
import UFSelectorReducer from "../Reducers/UFSelector.reducer";

const rootReducer = combineReducers({
    selectedUF: UFSelectorReducer,
    selectedCity: CitySelectorReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store
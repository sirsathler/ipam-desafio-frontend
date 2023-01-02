import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import SelectUFReducer from './SelectUF/SelectUF.reducer'


const rootReducer = combineReducers({
    selectUF: SelectUFReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store
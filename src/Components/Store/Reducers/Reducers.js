import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer';
import Counter from './Counter'


const reducers= combineReducers({
    
    ProductReducer,
    Counter
})

export default reducers
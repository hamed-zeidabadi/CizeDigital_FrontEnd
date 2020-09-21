import {createStore} from 'redux'
import reducers from './Reducers/index'


const store=createStore(reducers)
// console.log('az file store ast',store.getState())

export default store


// export default createStore(Reducers)
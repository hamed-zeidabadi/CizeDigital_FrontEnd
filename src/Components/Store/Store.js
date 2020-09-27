import {createStore} from 'redux'
import Reducers from './Reducers/Reducers'


const store=createStore(Reducers)

// console.log('az file store ast',store.getState())

export default store


// export default createStore(Reducers)
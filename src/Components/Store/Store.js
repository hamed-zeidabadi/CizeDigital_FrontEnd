import {createStore} from 'redux'
import Reducers from './Reducers/Reducers'


const store=createStore(Reducers)

export default store


// export default createStore(Reducers)
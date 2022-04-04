import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import cliReducer from './ClienteDucks'
import vendReducer from './ClienteDucks'
 
const rootReducer = combineReducers({
    clientes: cliReducer,
    vendedores: vendReducer
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
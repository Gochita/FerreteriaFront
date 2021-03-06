import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import cliReducer from './ClienteDucks'
import vendReducer from './VendedorDucks'
import factReducer from './FacturaDucks'
import prodReducer from './ProductoDucks'
 
const rootReducer = combineReducers({
    clientes: cliReducer,
    vendedores: vendReducer,
    facturas: factReducer,
    productos: prodReducer,
})
 
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
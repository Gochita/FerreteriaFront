
const initialData = {
    array : []
}


const TRAER_FACTURAS_SUCCESS = 'TRAER_FACTURAS_EXITO'


export default function factReducer (state = initialData, action) {
    switch (action.type) {
        case TRAER_FACTURAS_SUCCESS:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

export const traerFacturasAccion = () => async (dispatch, getState) => {
    try {
        const response = await fetch (`https://ferreteriasofkadonraul.herokuapp.com/facturas`)
        const contenido = await response.json();
        dispatch({
            type : TRAER_FACTURAS_SUCCESS,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}
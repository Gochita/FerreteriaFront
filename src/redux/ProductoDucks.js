const initialData = {
    array : []
}


const TRAER_PRODUCTOS_SUCCESS = 'TRAER_PRODUCTOS_EXITO'


export default function prodReducer (state = initialData, action) {
    switch (action.type) {
        case TRAER_PRODUCTOS_SUCCESS:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

export const traerProductosAccion = () => async (dispatch, getState) => {
    try {
        const response = await fetch (`https://ferreteriasofkadonraul.herokuapp.com/productos`)
        const contenido = await response.json();
        dispatch({
            type : TRAER_PRODUCTOS_SUCCESS,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}

const initialData = {
    array : []
}


const TRAER_VENDEDORES_SUCCESS = 'TRAER_VENDEDORES_EXITO'


export default function vendReducer (state = initialData, action) {
    switch (action.type) {
        case TRAER_VENDEDORES_SUCCESS:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

export const traerVendedoresAccion = () => async (dispatch, getState) => {
    try {
        const response = await fetch (`https://ferreteriasofkadonraul.herokuapp.com/listarVendedores`)
        const contenido = await response.json();
        dispatch({
            type : TRAER_VENDEDORES_SUCCESS,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}

const initialData = {
    array : []
}


const TRAER_CLIENTES_SUCCESS = 'TRAER_CLIENTES_EXITO'


export default function cliReducer (state = initialData, action) {
    switch (action.type) {
        case TRAER_CLIENTES_SUCCESS:            
            return {...state, array:action.payload }
        default:
            return state    
    }
}

export const traerClientesAccion = () => async (dispatch, getState) => {
    try {
        const response = await fetch (`https://ferreteriabacksofka.herokuapp.com/listarClientes`)
        const contenido = await response.json();
        dispatch({
            type : TRAER_CLIENTES_SUCCESS,
            payload : contenido
        })
        
    } catch (error) {
        console.log(error)
    }
}
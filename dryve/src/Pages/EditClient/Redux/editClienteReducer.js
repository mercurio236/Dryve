import { EDIT_CLIENT, DATA } from './editClienteAction';

const initialState = {
    data:[],
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DATA:
            return{
                ...state,
                data: payload
            }
        default:
            return state
    }
}
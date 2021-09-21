import { applyMiddleware, combineReducers, createStore} from 'redux';

import editClient from './Pages/EditClient/Redux/editClienteReducer';

const Reducer = combineReducers({
    //clientesState: HomeReduxReducer,
    editState: editClient
})

export default createStore(Reducer);
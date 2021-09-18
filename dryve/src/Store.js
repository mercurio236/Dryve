import { applyMiddleware, combineReducers, createStore} from 'redux';



const Reducer = combineReducers({
    //clientesState: HomeReduxReducer,
})

export default createStore(Reducer);
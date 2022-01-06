import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer from './reducers/counterReducer'; 
import UserReducer from './reducers/userReducer';
import thunk from 'redux-thunk'
import LoaderReducer from './reducers/loaderReducer';

const rootReducers = combineReducers({
    count: CounterReducer,
    user: UserReducer,
    isLoading: LoaderReducer,
})
let store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
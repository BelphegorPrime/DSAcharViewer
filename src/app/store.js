import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/index';

const middleware = applyMiddleware(thunk);
const mobileApp = combineReducers(reducers);

export default (data={})=>{
    return createStore(mobileApp, data, middleware);
}

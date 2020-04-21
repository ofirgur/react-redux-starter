import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import httpReducer from 'http-redux/reducers';
import modulesReducers from 'modules/reducers';
import siteMapReducer from 'siteMap/reducers';
import userReducer from 'user/reducers';

// use es6 object literal shorthand syntax to define the object shape
export default (asyncReducers = {}, history) => {
    return combineReducers({
        router: connectRouter(history),  
        http: httpReducer,
        modules: modulesReducers(asyncReducers),
        siteMap: siteMapReducer,
        user: userReducer
    });
};
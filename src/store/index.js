import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import createRootReducer from 'reducers';
import { injectMiddleware } from 'middlewares';
import configureStore from './configureStore';
import helpers from './helpers';

const preloadedState = {};
export const history = createBrowserHistory();

const store = configureStore(preloadedState, history);
export default store;

/*********************************** */

// for future injected reducers
const asyncReducers = {}; 
// inject new reducer to store
const injectReducer = (key, reducer) => {
    // ignore injected reducers
    if (asyncReducers.hasOwnProperty(key)) return;

    asyncReducers[key] = reducer;
    store.replaceReducer(createRootReducer(asyncReducers, history));
};

// for future injected routes
const injectRoute = ({ path, component, reducer, middleware }) => {
    const Main = lazy(() => 
      Promise.all([
        component && component.promise ? (typeof component.promise  === 'function' ? component.promise() : component.promise) : Promise.resolve(null),
        reducer && reducer.promise ? (typeof reducer.promise  === 'function' ? reducer.promise() : reducer.promise) : Promise.resolve(null),
        middleware && middleware.promise ? middleware.promise() : Promise.resolve(null)
      ]).then(([componentResult, reducerResult, middlewareResult]) => {

        // injects module's reducer lazy load
        reducerResult && injectReducer(reducer.name, reducerResult.default);

        // inject module's middleware lazy load
        const middlewares = middlewareResult && middlewareResult.default;
        middlewares && injectMiddleware(...(Array.isArray(middlewares) ? middlewares : [middlewares]));
        
        return componentResult || { default: () => false };
      })
    );

    const Outlet = () => (
      <Suspense fallback={<div>Loading...</div>}><Main /></Suspense>
    );

    return [
      <Route key={path} path={path} component={Outlet} />
    ];
};

helpers.injectRoute = injectRoute;

/*********************************** */






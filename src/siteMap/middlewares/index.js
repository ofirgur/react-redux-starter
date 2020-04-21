import { LOCATION_CHANGE } from 'connected-react-router';

import { SITE_ROUTES_NORMALIZE } from '../actions/types';
import { findRouteFallback } from '../helpers';
import { currentRouteChange } from '../actions';
import { getCurrentRouteTree } from '../selectors';

export default store => next => action => {
    next(action);
    const { dispatch, getState } = store;

    const fetchRoute = (routes, pathname) => {
        const route = findRouteFallback(routes, pathname);
        dispatch(currentRouteChange(route));
    };

    switch(action.type) {
        case SITE_ROUTES_NORMALIZE: {
            const pathanme = location.pathname,
                  routes = action.payload;

            fetchRoute(routes, pathanme);
            break;
        }
        case LOCATION_CHANGE: {
            const { pathname } = action.payload.location,
                    routes = getCurrentRouteTree(getState());

            fetchRoute(routes, pathname);
            break;
        }
    }
    
};


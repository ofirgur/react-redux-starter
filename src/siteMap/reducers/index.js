import { SITE_ROUTES_NORMALIZE, CURRENT_ROUTE_CHANGE } from '../actions/types';

const defaultState = {
    routes: null,
    currentRoute: null
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {

        case SITE_ROUTES_NORMALIZE:
            return {
                ...state,
                routes: payload
            };

        case CURRENT_ROUTE_CHANGE: 
            return {
                ...state,
                currentRoute: payload
            };
    }

  return state;
};
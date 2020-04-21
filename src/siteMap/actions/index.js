import { SITE_ROUTES_NORMALIZE, CURRENT_ROUTE_CHANGE } from './types';
import { normalizeRoutesTree } from '../helpers';
import routesTree from '../routesTree';


export const routesTreeNormalize = () => ({
    type: SITE_ROUTES_NORMALIZE,
    payload: normalizeRoutesTree(routesTree)
});

export const  currentRouteChange = route => ({
    type: CURRENT_ROUTE_CHANGE,
    payload: route
});

import { findRoute, findRouteFallback } from './index';
import routesTree from '../routesTree';
import routesList from '../routesList';

const { home, modules } = routesList;

describe('findRoute function', () => {
    const homeRoute = findRoute(routesTree, { key: 'pathname', value: home.pathname });
    it('it should find the module route', () => {
        expect(homeRoute.key).toEqual(home.key);
    });
    
    const modulesRoute = findRoute(routesTree, { key: 'pathname', value: modules.pathname });
    it('it should find the module route', () => {
        expect(modulesRoute.key).toEqual(modules.key);
    });
});

describe('findRouteFallback function', () => {
    const modulesRoute = findRouteFallback(routesTree, `${modules.pathname}/fakeroute`);
    it('it should find the module route', () => {
        expect(modulesRoute.key).toEqual(modules.key);
    });

    const homeRoute = findRouteFallback(routesTree, `${home.pathname}fakeroute`);
    it('it should find the home route', () => {
        expect(homeRoute).toBe(undefined);
    });
});
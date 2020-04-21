export const getCurrentRouteTree = state => state.siteMap.routes;

export const getCurrentRoute = state => state.siteMap.currentRoute;

export const getCurrentTitle = state => state.siteMap.currentRoute && state.siteMap.currentRoute.title;

export const getCurrentIcon = state => state.siteMap.currentRoute && state.siteMap.currentRoute.icon;

export const isActiveRoute = state => pathname => {
    const { currentRoute } = state.siteMap;
    if(!currentRoute) return;

    let { breadcrumbs } = currentRoute;
    if(!breadcrumbs) return;

    breadcrumbs = breadcrumbs.length === 1 ? breadcrumbs : breadcrumbs.slice(1);
    return breadcrumbs.filter(b => b.pathname === pathname).length > 0;
};
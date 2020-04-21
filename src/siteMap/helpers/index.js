// import user from 'user';

// find route recursivly in the site Tree
export const findRoute = (routes, find) => {
    if(!routes || !find) return;

    const { key, value } = find;
    if(routes[key] === value) return routes; 

    const { childRoutes } = routes;   
    if(!childRoutes) return;

    let result;
    for(let i = 0; !result && i < childRoutes.length; i++) {
        result = findRoute(childRoutes[i], find);
        if(result) break;
    }

    return result;
};

// in case if not finding current route, looking up the tree until finding match
export const findRouteFallback = (routes, pathname) => {

    // route found - return original findRoute object
    const route = findRoute(routes, { key: 'pathname', value: pathname });   
    if(route) return route;
    
    // route not found - checking parent route
    const pathArray = pathname.split('/');
    // stop in home route and return undefined
    if(pathArray.length === 1) return;

    // continue the search recursivly
    const parentPathname = pathArray.slice(0, pathArray.length - 1).join('/');
    return findRouteFallback(routes, parentPathname);
};

export const normalizeRoutesTree = (routes, parent) => {
    if(!routes) return;

    const route = {
        ...routes,
        ...buildRouteDetails(routes, parent)
    };

    const { childRoutes } = routes;
    route.childRoutes = (
        childRoutes &&
        [...childRoutes.map(child => normalizeRoutesTree(child, route))]
    );

    return route;
};

const buildRouteDetails = (route, parent) => {
    
    const height = buildHeight(parent);
    const backPathname = buildBackPathname(parent);
    const breadcrumbs = buildBreadcrumbs(route, parent);

    return {
        ...route,
        height,
        backPathname,
        breadcrumbs
    };
};

const buildHeight = (parent) => {
    if (!parent) return 0;
    
    return 1 + parent.height;
};

const buildBackPathname = parent => {
    if(!parent) return null;

    return parent.pathname;
};

const buildBreadcrumbs = (route, parent) => {    
    if(!route) return;

    const breadcrumbs = { 
        pathname: route.pathname, 
        title: route.title 
    };

    return (
        parent 
        ? [...parent.breadcrumbs, breadcrumbs]
        : [breadcrumbs]
    );
};

// export const isEligibleModule = key => {    
//     const isEligible = (
//         user.eligibility[key] &&
//         user.eligibility[key].IsEligible
//     );

//   return isEligible;
// };

// export const getEligibleRoutes = routes => {
//     const eligibleRoutes = {
//         ...routes,
//         childRoutes: (
//             routes.childRoutes
//             .map(mapToEligibleChildRoutes)
//             .filter(filterByEligibleChildRoutes)
//         )
//     };

//     return normalizeRoutesTree(eligibleRoutes);
// };

// const mapToEligibleChildRoutes = route => {
//     const { childRoutes } = route;

//     return {                        
//         ...route,
//         childRoutes: (
//             childRoutes && 
//             childRoutes.filter(isEligibleModule)
//         )
//     };
// };

// const filterByEligibleChildRoutes = route => {
//     const { childRoutes } = route;

//     return (
//         childRoutes && 
//         childRoutes.length > 0
//     );
// };


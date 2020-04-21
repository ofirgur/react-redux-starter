import routesTree from '../routesTree'; 

const tempModulesRoutes = {};
const buildModulesRoutes = routes => {
  if(!routes) return;
    tempModulesRoutes[routes.name] = {
    ...routes,
    path: routes.pathname,
    //childRoutes: undefined
  };

  const { childRoutes } = routes;
  if(childRoutes) {
    for(let i = 0; i < childRoutes.length; i++) {
      buildModulesRoutes(childRoutes[i]);
    }
  }
};

buildModulesRoutes(routesTree);

export default { 
  ...tempModulesRoutes
};
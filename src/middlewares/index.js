import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import httpMiddleware from 'http-redux/middlewares';

import modulesMiddlewares from 'modules/middlewares';
import siteMapMiddleware from 'siteMap/middlewares';

const composeEnhancers = composeWithDevTools({});

export default history => {
    return composeEnhancers(
      applyMiddleware(
        httpMiddleware,
        routerMiddleware(history), // for dispatching history actions
        modulesMiddlewares.enhancer,
        siteMapMiddleware,
      )
    );
  };

export const injectMiddleware = modulesMiddlewares.injectMiddleware;
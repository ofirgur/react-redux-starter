import helpers from 'store/helpers';
import { siteRoutes } from 'siteMap';

export default helpers.injectRoute({
  path: siteRoutes.testmodule.pathname,
  component: {
    promise: () => import(/* webpackChunkName: "test-module" */'./components/Outlet'),
  },
  reducer: {
    name: 'testModule',
    promise: () => import(/* webpackChunkName: "test-module" */'./reducers'),
  },
  middleware: {
    promise: () => import(/* webpackChunkName: "test-module" */'./middlewares'),
  }
});
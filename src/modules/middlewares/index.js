import { compose } from 'redux';

const createDynamicMiddlewares = () => {
    let dynamicMiddlewares = [];

    const enhancer = store => next => action => {
        // return next middleware if no dynamic ones
        if (!dynamicMiddlewares.length) return next(action);

        // creating dynamic chain
        const chain = dynamicMiddlewares.map(middleware => middleware(store));

        return compose(...chain)(next)(action);
    };

    const injectMiddleware = (...middlewares) => {
        dynamicMiddlewares = [...dynamicMiddlewares, ...middlewares];
    };

    return {
        enhancer,
        injectMiddleware,
    };
};

const dynamicMiddlewaresInstance = createDynamicMiddlewares();
export default dynamicMiddlewaresInstance;



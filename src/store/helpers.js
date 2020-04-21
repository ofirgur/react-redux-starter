/**
 * Avoid multiple direct import from store/index.js
 * all routes should import injectReducer from this file instead
 */

const helpers = { 
    injectRoute: () => {} 
};

export default helpers;

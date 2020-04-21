import { combineReducers } from 'redux';

export default asyncReducers => {
    if (Object.keys(asyncReducers) == 0) {
        // no reducers yet - setting default one (avoid redux error)
        return null;
    }

    // setting reducers
    return combineReducers(asyncReducers);
};
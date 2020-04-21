import { LOCATION_CHANGE } from 'connected-react-router';

export default () => next => action => {
    next(action);

    switch(action.type) {
        case LOCATION_CHANGE:
            console.log('TEST MODULE MIDDLEWARE: ', action.payload);
            break;
    }
};
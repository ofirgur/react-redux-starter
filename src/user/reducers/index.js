import { FETCH_USER_DATA} from '../actions/types';

export default (state = {}, action) => {
    
    switch(action.type) {
        case FETCH_USER_DATA.SUCCESS: 
            return {
                ...action.response
            };
        case FETCH_USER_DATA.FAILURE: 
            return {
                ...action.error
            };
    }

    return state;
};
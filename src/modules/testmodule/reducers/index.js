import { FETCH_TEST_DATA} from '../actions/types';

export default (state = {}, action) => {
    
    switch(action.type) {
        case FETCH_TEST_DATA.SUCCESS: 
            return {
                ...action.response
            };
        case FETCH_TEST_DATA.FAILURE: 
            return {
                ...action.error
            };
    }

    return state;
};
import { CREATE_API_ACTION } from './types';

export const createApiAction = apiAgent => ({
    type: CREATE_API_ACTION.DEFAULT,
    apiAgent
});

export const createApiActionFetching = (actionType, isFetching) => ({
    type: CREATE_API_ACTION.FETCHING,
    payload: {
        actionType: actionType.FETCHING,
        isFetching: isFetching ? true : undefined 
    }
});


import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { CREATE_API_ACTION } from '../actions/types';

import { createApiActionFetching } from '../actions';

export default store => next => action => {
    next(action);

    const { dispatch } = store;

    switch(action.type) {
        case CREATE_API_ACTION.DEFAULT: {
            const { apiAgent } = action;
            if(!apiAgent) break;

            const { actionType, method, url, data, onSuccess, onError, mock } = apiAgent;

            dispatch(createApiActionFetching(actionType, true));

            //if(__IS_MOCKED__ && mock.enable) {
            if(mock.enable) {
                // This sets the mock adapter on the default instance
                const mockAdapter = new MockAdapter(axios, { delayResponse: mock.delay });

                // Mock GET request to /users when param `searchText` is 'John'
                // arguments for reply are (status, data, headers)
                mockAdapter[getMethod(method)](url, data).reply(mock.status, mock.response); 
            }
            
            axios({
                method,
                url,
                data
            })
            .then(response => {
                dispatch({ 
                    type: actionType.SUCCESS,
                    response
                });
                
                onSuccess && onSuccess(response, dispatch);
            })
            .catch(error => {
                dispatch({ 
                    type: apiAgent.actionType.FAILURE,
                    error
                });

                onError && onError(error, dispatch);
            })
            .finally(
                setTimeout(() => {
                    dispatch(createApiActionFetching(actionType, false));
                }, 3000)
            );
                    
            break;
        }
    }
};

const getMethod = method => {
    switch(method) {
        case 'get': return 'onGet';
        case 'post': return 'onPost';
        case 'put': return 'onPut';
        case 'delete': return 'onDelete';
    }
};

/**
 
{
    actionType,
    url,
    method,
    data,
    success: response => { ... }
    error: error => { ... }
}

 */


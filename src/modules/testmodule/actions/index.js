import { createApiAction } from 'http-redux/actions';
import { FETCH_TEST_DATA} from './types';
import mockResponse from '../mocks/mockResponse.json';
import { loadNamespaces  } from 'i18n/helpers';

export const fetchTestData = () => createApiAction({
    actionType: FETCH_TEST_DATA,
    url: 'http://jsonplaceholder.typicode.com/users/1',
    method: 'get',
    onSuccess: (response, dispatch) => {   
        const { data } = response;
        const { assets } = data;

        loadNamespaces(assets.namespaces);
        dispatch({ type: 'DO_SOMETHING_GOOD' });
    },
    onError: (error, dispatch) => {
        dispatch({ type: 'DO_SOMETHING_BAD' });
    },
    mock: {
        enable: true,
        status: 200,
        response: mockResponse,
        delay: 2000
    }
});



import { FETCH_USER_DATA } from './types';
import { createApiAction } from 'http-redux/actions';
import { routesTreeNormalize } from 'siteMap/actions';
import userMockResponse from '../mocks/userMockResponse.json';
import user from '../index'; 
import { changeLanguage, loadNamespaces  } from 'i18n/helpers';

export const fetchUsertData = () => createApiAction({
    actionType: FETCH_USER_DATA,
    url: 'http://my-endpoint/user',
    method: 'get',
    onSuccess: (response, dispatch) => {
        const { data } = response;
        const { lang, assets } = data;

        dispatch(routesTreeNormalize());
        user.onSuccess(data);
        loadNamespaces(assets.namespaces);
        changeLanguage(lang);
    },
    onError: (error, dispatch) => {
        dispatch({ type: 'DO_SOMETHING_BAD' });
    },
    mock: {
        enable: true,
        status: 200,
        response: userMockResponse,
        delay: 2000
    }
});
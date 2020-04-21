import { INIT_SYSTEM  } from './types';
import { loadNamespace } from '../helpers';

export const initSystem = ({ url, namespace, mock }) => createApiAction({
    actionType: INIT_SYSTEM,
    url,
    method: 'get',
    onSuccess: (response, dispatch) => {
        const { lang, resources } = response.data;
        loadNamespace(lang, namespace, resources);
    },
    onError: (error, dispatch) => {},
    mock: mock && {
        enable: true,
        status: 200,
        response: mockResponse,
        delay: 2000
    }
});

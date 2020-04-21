import { CREATE_API_ACTION } from '../actions/types';

const defaultState = {
    isFetchingCollection: {}
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {

        case CREATE_API_ACTION.FETCHING: {
            const { actionType, isFetching } = payload;

            return {
                ...state,
                isFetchingCollection: {
                    ...state.isFetchingCollection,
                    [actionType]: isFetching
                }
            };
        }
    }

  return state;
};
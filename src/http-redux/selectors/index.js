export const isFetching = actionType => state => {
    return state.http.isFetchingCollection[actionType.FETCHING];
};
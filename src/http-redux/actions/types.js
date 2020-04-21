export const nextTypeCreator = type => ({
    DEFAULT: `${type}/DEFAULT`,
    SUCCESS: `${type}/SUCCESS`,
    FAILURE: `${type}/FAILURE`,
    FETCHING: `${type}/FETCHING`
});

export const CREATE_API_ACTION = nextTypeCreator('@@http/CREATE_API_ACTION');
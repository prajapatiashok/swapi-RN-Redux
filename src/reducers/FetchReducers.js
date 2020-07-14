import { FETCH_ROOT_RESOURCE, FETCH_SPECIFIC_RESOURCE, FETCH_RESOURCE_DETAIL } from '../actions/Types';

const INITIAL_STATE = {
    resources: [],
    specificResource:[],
    resourceDetail: undefined
}

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case FETCH_ROOT_RESOURCE:
            return { ...state, resources: action.payload, specificResource: [], resourceDetail: undefined };
        case FETCH_SPECIFIC_RESOURCE:
            return { ...state, specificResource: action.payload };
        case FETCH_RESOURCE_DETAIL:
            return { ...state, resourceDetail: action.payload };
        default:
            return state;
    }
}
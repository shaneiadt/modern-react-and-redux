import { omit } from 'lodash';

import { ACTIONS } from "../actions/types";

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ACTIONS.FETCH_STREAMS:
            return { ...state, ...payload };
        case ACTIONS.DELETE_STREAM:
            return omit(state, payload);
        case ACTIONS.CREATE_STREAM:
        case ACTIONS.EDIT_STREAM:
        case ACTIONS.FETCH_STREAM:
            return { ...state, [payload.id]: payload };
        default:
            return state;
    }
}

export default streamReducer;
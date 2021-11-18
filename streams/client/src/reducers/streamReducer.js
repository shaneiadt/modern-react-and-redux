import { omit } from 'lodash';

import { ACTIONS } from "../actions/types";

const INITIAL_STATE = {};

const streamReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        default:
        case ACTIONS.FETCH_STREAMS:
            return state;
        case ACTIONS.DELETE_STREAM:
            return omit({ ...state }, payload);
    }
}

export default streamReducer;
import streams from '../apis/streams';
import { ACTIONS } from "./types";

export const signIn = (userId) => {
    return {
        type: ACTIONS.SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: ACTIONS.SIGN_OUT
    };
}

export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues);
}
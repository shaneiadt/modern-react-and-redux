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
    const response = await streams.post('/streams', formValues);

    dispatch({
        type: ACTIONS.CREATE_STREAM,
        payload: response.data
    });
}
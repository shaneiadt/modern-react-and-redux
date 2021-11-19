import streams from '../apis/streams';
import { ACTIONS } from "./types";

import history from '../history';

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

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({
        type: ACTIONS.CREATE_STREAM,
        payload: { ...response.data, userId }
    });

    history.push('/');
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get(`/streams`);

    dispatch({
        type: ACTIONS.FETCH_STREAMS,
        payload: response.data
    });
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: ACTIONS.FETCH_STREAM,
        payload: response.data
    });
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({
        type: ACTIONS.EDIT_STREAM,
        payload: response.data
    });

    history.push('/');
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({
        type: ACTIONS.DELETE_STREAM,
        payload: id
    });
}
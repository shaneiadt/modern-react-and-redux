import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
    }
}

export const fetchUser = (userId) => async (dispatch, getState) => {
    console.log('getState', getState());
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response
    });
}
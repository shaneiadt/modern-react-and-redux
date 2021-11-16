import { ACTIONS } from "../actions/actionTypes";

const INITIAL_STATE = {
    isSignedIn: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.SIGN_IN:
            return { ...state, isSignedIn: true };
        case ACTIONS.SIGN_OUT:
            return { ...state, isSignedIn: false };
        default:
            return state;
    }
}

export default authReducer;
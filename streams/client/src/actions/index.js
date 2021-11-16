import { ACTIONS } from "./types";

export const signIn = () => {
    return {
        type: ACTIONS.SIGN_IN
    };
}

export const signOut = () => {
    return {
        type: ACTIONS.SIGN_OUT
    };
}
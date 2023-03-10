import  { signInWithFacebook, signInWithGoogle, signOutUser  } from '../../apis/firebase';
import { START_LOADING, UPDATE_ERROR, UPDATE_USER_DATA } from './UserConstants';


export function startLoading() {
    return {
        type: START_LOADING
    }
}

export function updateUserData(payload) {
    return {
        type: UPDATE_USER_DATA,
        payload
    }
}

export function updateError(payload) {
    return {
        type: UPDATE_ERROR,
        payload
    }
}



export function loginUserGoogle() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then((response) => {
            const payload = response.user;
            dispatch(updateUserData(payload));
        }).catch((error) => {
            dispatch(updateError(error))
        })
    }
}

export function loginUserFacebook() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithFacebook().then((response) => {
            const payload = response.user;
            
            dispatch(updateUserData(payload));
        }).catch((error) => {
            dispatch(updateError(error))
        })
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signOutUser().then(() => {
            dispatch(updateUserData(null))
        }).catch((error) => {
            dispatch(updateError(error))
        })
    }
}


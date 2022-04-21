import React from "react";

const initialState = {
    checkAuth: false
}

/* export const checkAuthReducer = (state: any = initialState, action: TypeCheckAuthType) => {
    switch (action.type) {
        case 'CHECK-AUTH':
            return {
                ...state,
                checkAuth: action.checkAuth
            };

        default:
            return state
    }
}
export type TypeCheckAuthType = {
    type: 'CHECK-AUTH',
    checkAuth: boolean

}
export const checkAuthAC = (checkAuth: boolean) => {
    return {
        type: 'CHECK-AUTH',
        checkAuth: checkAuth

    }
} */
/* export const loginThunkThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        cardsAPI.login(email, password, rememberMe)
            .then(res => {
                dispatch(loginAC(res.data))
            })
    }
} */
import React from "react";
import { SetPassword } from "../components/setPassword/SetPassword";
import { api, UserType } from "../DAL/api";
import { authAC, authReducer, authThunkCreator } from "./authReducer";
//import { setProfileAC } from "./profileReducer";

const initialState = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: null,

    createdDate: null,
    updated: null,
    isAdmin: false,
    verifed: false,
    rememberMe: false,

    error: '',
    isLoggedIn: false
}
type initialStateType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verifed: boolean,
    rememberMe: boolean,

    error: string | null,
    isLoggedIn: boolean
}

type ActionsType = ReturnType<typeof loginAC> | ReturnType<typeof setIsloggedInAC>

export const loginReducer = (state: any = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.data
            }
        case "SET-ISLOGGEDIN":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        default:
            return state
    }
}
export const setIsloggedInAC = (isLoggedIn: boolean) => {
    return {
        type: "SET-ISLOGGEDIN",
        isLoggedIn
    } as const
}

export const loginAC = (data: UserType) => {
    return {
        type: 'LOGIN',
        data
    } as const
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        api.login(email, password, rememberMe)
            .then(res => {
                dispatch(loginAC(res.data))
                dispatch(setIsloggedInAC(true))
            })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch: any) => {
        debugger
        api.logout()
            .then(res => {
                dispatch(setIsloggedInAC(false))
            })
    }
}

export const forgotThunkCreator = (email: string) => {
    return async (dispatch: any) => {
        await api.forgot('string', 'test', 'blablabla')
        try {
            alert('Your letter is blablabla')
        } catch (e: any) {
            throw new Error('It is just test')
        }
    }
}
export const setNewPasswordThunkCreator = (password: string, token: string) => {
    return async (dispatch: any) => {
        await api.newPassword(password, token)
        try {
            alert('ok')
        } catch (e: any) {
            alert(e.message)
        }
    }
}

/* export const loginReducer = (state: any = initialState, action: TypeLoginType) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.data,

            };

        default:
            return state
    }
}
export type TypeLoginType = {
    type: 'LOGIN',
    data: ResponseAuthLoginType,

}
export const loginAC = (data: ResponseAuthLoginType) => {
    return {
        type: 'LOGIN',
        data: data

    }
}
export const loginThunkThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        cardsAPI.login(email, password, rememberMe)
            .then(res => {
                dispatch(loginAC(res.data))
                dispatch(checkAuthAC(true))
            })
    }
} */
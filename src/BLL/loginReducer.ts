import React from "react";
import { api, UserType } from "../DAL/api";
import { setAuthAC } from "./authReducer";
import { setProgressThunkCreator } from "./progressReducer";

const initialState = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: null,
    createdDate: null,
    updated: null,
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
    created: null
}
export type initialStateType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error: string | null,
    created: any
}

type ActionsType = ReturnType<typeof loginAC> | ReturnType<typeof setAuthAC>

export const loginReducer = (state: any = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export const loginAC = (data: UserType) => {
    return {
        type: 'LOGIN',
        data
    } as const
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        const result = await api.login(email, password, rememberMe)
        try {
            dispatch(loginAC(result.data))
            dispatch(setAuthAC(true))
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            alert('loginThunkCreator')
            dispatch(setProgressThunkCreator(false))
        }
    }
}
export const logoutThunkCreator = () => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        await api.logout()
        try {
            dispatch(setAuthAC(false))
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            alert('logoutThunkCreator')
            dispatch(setProgressThunkCreator(false))
        }
    }
}
export const forgotThunkCreator = (email: string) => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        await api.forgot('string', 'test', 'blablabla')
        try {
            alert('Your letter is blablabla')
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            throw new Error('It is just test')
        }
    }
}
export const setNewPasswordThunkCreator = (password: string, token: string | undefined) => {
    return async (dispatch: any) => {
        await api.newPassword(password, token)
        try {
            alert('ok')
        } catch (e: any) {
            alert(e.message)
        }
    }
}
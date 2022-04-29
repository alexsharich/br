import React from "react";
import { api } from "../DAL/api";
import { setProgressThunkCreator } from "./progressReducer";


const initState = {

}

export const registerReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'REGISTRATION':
            return state
        default: return state
    }
}

export const registerThunkCreator = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        try {
            await api.register(email, password)
            dispatch(setProgressThunkCreator(false))
            alert('you are cool')
        } catch (e: any) {
            alert(e.message)
            dispatch(setProgressThunkCreator(false))
        }
    }
}


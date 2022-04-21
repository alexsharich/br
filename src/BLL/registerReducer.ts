import React from "react";
import { api } from "../DAL/api";


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
    return async () => {
        try {
            await api.register(email, password)
            alert('you are cool')
        } catch (e:any) {
            alert(e.message)
              }
    }
}

/* type InitStateType = {
    email: string,
    password: string
}
type ActionType = ReturnType<typeof registrationAC>


export const registerReducer = (state: InitStateType, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            return {
                ...state,
                email: action.email,
                password: action.password
            };

        default:
            return state
    }
}

export const registrationAC = (email: string, password: string) => {
    return {
        type: 'REGISTRATION',
        email: email,
        password: password,
    } as const
}
export const registerThunkCreator = (email: string, password: string) => {
    return (dispatch: any) => {
        cardsAPI.register(email, password)
            .then(res => {
                alert('good')
            })
            .catch(error => {
                alert(error.message)
            })

    }
} */
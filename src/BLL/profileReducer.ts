import React from "react";

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
    error: ''
}
type initialStateType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number | null,
    createdDate: null | Date,
    updated: null | Date,
    isAdmin: boolean,
    verifed: boolean,
    rememberMe: boolean,
    error: string | null
}

export const profileReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case 'SET-PROFILE':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export const setProfileAC = (data: any) => {
    return {
        type: 'SET-PROFILE',
        data: data
    }
}


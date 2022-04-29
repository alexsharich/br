
import { api, apiCards } from "../DAL/api";
import { loginAC } from "./loginReducer";
import { setProfileAC } from "./profileReducer";
import { setProgressThunkCreator } from "./progressReducer";
import { AppRootStateType } from "./store";

const initialState = {
    auth: false
}
type InitialStateType = {
    auth: boolean
}
type ActionType = ReturnType<typeof setAuthAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'AUTH':
            return {
                ...state,
                auth: action.auth
            }
        default:
            return state
    }
}


export const setAuthAC = (auth: boolean) => {
    return {
        type: 'AUTH',
        auth
    } as const
}
export const authThunkCreator = () => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        let result = await api.me()
        try {
            dispatch(loginAC(result.data))
            dispatch(setAuthAC(true))
            dispatch(setProfileAC(result.data))
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            alert('authThunkCreator')
        }
    }
}



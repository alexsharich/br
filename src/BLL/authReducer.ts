
import { ThunkAction } from "redux-thunk";
import { api, apiCards } from "../DAL/api";
import { SetCardsActionType } from "./cardsReducer";
import { loginAC, LoginActionType } from "./loginReducer";
import { SetPacksListActionType } from "./packsListReducer";
import { setProfileAC, SetProfileActionType } from "./profileReducer";
import { SetProgressActionType, setProgressThunkCreator } from "./progressReducer";
import { AppRootStateType } from "./store";

export type ActionsTypes = SetAuthActionType
    | SetCardsActionType
    | LoginActionType
    | SetPacksListActionType
    | SetProfileActionType
    | SetProgressActionType

export type ThunkType = ThunkAction<Promise<void>, AppRootStateType, unknown, ActionsTypes>

const initialState = {
    auth: false
}
type InitialStateType = {
    auth: boolean
}
type ActionType = SetAuthActionType

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

export type SetAuthActionType = {
    type: 'AUTH',
    auth: boolean
}

export const setAuthAC = (auth: boolean) => {
    return {
        type: 'AUTH',
        auth
    } as const
}
export const authThunkCreator = (): ThunkType => {
    return async (dispatch) => {
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



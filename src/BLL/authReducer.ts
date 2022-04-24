
import { api, apiCards } from "../DAL/api";
import { loginAC } from "./loginReducer";
import { setProfileAC } from "./profileReducer";
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
        let result = await api.me()
        try {
            dispatch(loginAC(result.data))
            dispatch(setAuthAC(true))
            dispatch(setProfileAC(result.data))
        } catch (e: any) {
            alert('authThunkCreator')
        }
    }
}







/* export const authreducer = (state: any = initialState, action: TypeAuthACType) => {
    switch (action.type) {
        case 'AUTH':
            return {
                ...state,
                ...action.data
            };

        default:
            return state
    }
}
type TypeAuthACType = {
    type: 'AUTH',
    data: ResponseAuthLoginType,

}
const authAC = (data: ResponseAuthLoginType) => {
    return {
        type: 'AUTH',
        data: data,
    }
}
export const authThunkCreator = () => {
    return (dispatch: any) => {
        cardsAPI.auth()
            .then(res => {
                dispatch(authAC(res.data))
                
            })
    }
} */

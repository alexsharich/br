
import { api } from "../DAL/api";
import { loginAC, setIsloggedInAC } from "./loginReducer";
import { AppRootStateType } from "./store";

const initialState = {
    auth: false
}
type InitialStateType = {
    auth: boolean
}
type ActionType = ReturnType<typeof authAC>

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


export const authAC = (auth: boolean) => {
    return {
        type: 'AUTH',
        auth
    } as const
}
export const authThunkCreator = () => {
    return (dispatch: any) => {
        api.me()
            .then(res => {
                dispatch(loginAC(res.data))
                dispatch(setIsloggedInAC(true))
            })
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

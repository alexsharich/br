import { ThunkType } from "./authReducer"

const initialState = {
    progress: true
}
type InitialStateType = {
    progress: boolean
}
type ActionType = SetProgressActionType

export const progressReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-PROGRESS':
            return {
                ...state,
                progress: action.progress
            }
        default:
            return state
    }
}

export type SetProgressActionType = {
    type: 'SET-PROGRESS'
    progress: boolean
}

const setProgressAC = (progress: boolean) => {
    return {
        type: 'SET-PROGRESS',
        progress
    } as const
}
export const setProgressThunkCreator = (progress: boolean): ThunkType => {
    return async (dispatch) => {
        dispatch(setProgressAC(progress))
    }
}
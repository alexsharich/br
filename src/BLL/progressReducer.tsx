const initialState = {
    progress: true
}
type InitialStateType = {
    progress: boolean
}
type ActionType = ReturnType<typeof setProgressAC>

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

const setProgressAC = (progress: boolean) => {
    return {
        type: 'SET-PROGRESS',
        progress
    } as const
}
export const setProgressThunkCreator = (progress: boolean) => {
    return (dispatch: any) => {
        dispatch(setProgressAC(progress))
    }
}
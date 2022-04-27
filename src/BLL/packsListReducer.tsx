import React from 'react'
import { apiCards } from '../DAL/api'
import { setProgressThunkCreator } from './progressReducer'

const initialState = {
    cardPacks: [
        {
            _id: 'werwer',
            user_id: 'sdfsdf',
            name: 'sdfsdf',
            path: 'sdfsdf',
            cardsCount: 0,
            grade: 0,
            shots: 0,
            rating: 0,
            type: 'pack',
            created: 'sdfsd',
            updated: 'dfgfdg',
            _v: 0
        },
    ],
    cardPacksTotalCount: 14,
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,
    pageCount: 4
}

type ActionsType = ReturnType<typeof setPacksListAC>

export const packsListReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'SET-PACKSLIST':
            return {
                ...state,
                ...action.cardPacks,
            }
        default:
            return state
    }
}

export const setPacksListAC = (cardPacks: any) => {
    return {
        type: 'SET-PACKSLIST',
        cardPacks: cardPacks
    } as const
}

export const getPacksListTC = (page:number) => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        const result = await apiCards.getPacks(page)
        try {
            dispatch(setPacksListAC(result.data))
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            dispatch(setProgressThunkCreator(false))
        }
    }
}
export const deletePackTC = (id: string) => {
    return async (dispatch: any) => {
        dispatch(setProgressThunkCreator(true))
        const result = await apiCards.deletePack(id)
        try {
            debugger
            dispatch(getPacksListTC(1))
            dispatch(setProgressThunkCreator(false))
        } catch (e: any) {
            debugger
            alert('deletePackTC')
            dispatch(setProgressThunkCreator(false))
        }
    }
}
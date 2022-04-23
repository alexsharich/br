import React from 'react'
import { apiCards } from '../DAL/api'

const initialState = {

}

type ActionType = ReturnType<typeof setCardsAC>

export const cardsReducer = (state: any = initialState, action: ActionType): any => {
    switch (action.type) {
        case 'SET-CARDS':
            return {
                state
            }
        default:
            return state
    }
}

const setCardsAC = (cards: any) => {
    return {
        type: 'SET-CARDS',
        cards
    } as const
}

export const responseCardsThunkCreator = () => {
    return (dispatch: any) => {
        apiCards.getCards()
        .then(res=>{
            debugger
        })
        .catch(error=>{
            debugger
        })
    }
}
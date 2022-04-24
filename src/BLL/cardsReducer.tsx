import React from 'react'
import { apiCards } from '../DAL/api'

const initialState = {
cards:[
    {
        answer:'---',
        question:'---',
        cardsPack_id:'',
        grade:0,
        rating:0,
        shots:0,
        type:'',
        user_id:'',
        created:'',
        updated:'---',
        __v:0,
    }
],
cardsTotalCount:0,
maxGrade:0,
minGrade:0,
page:1,
pageCount:10,
packUserId:''
}

type ActionType = ReturnType<typeof setCardsAC>

export const cardsReducer = (state: any = initialState, action: ActionType): any => {
    switch (action.type) {
        case 'SET-CARDS':
            return {
                ...state,
                ...action.cards
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

export const getCardsThunkCreator = () => {
    return (dispatch: any) => {
        apiCards.getCards()
        .then(res=>{
          apiCards.getCards()
          .then(res=>{
              dispatch(setCardsAC(res.data))
          })
          .catch(e=>{
              alert('getCardsReducer')
          })
        })
    }
}
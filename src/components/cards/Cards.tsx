import React from 'react'
import s from './Cards.module.css'
import { Paginator } from '../pagination/Pagination'
import { getCardsThunkCreator } from '../../BLL/cardsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../BLL/store'
import { Navigate } from 'react-router-dom'

export const Cards = () => {

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const cards = useSelector<AppRootStateType, any>(state => state.cards.cards)
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.pageCount)
    const dispatch = useDispatch()

    const onClickTestHandler = () => {
        dispatch(getCardsThunkCreator())
    }

    if (!auth) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <h2>{`Pack name`}</h2>
            <div >
                <div>
                    <input type="text" placeholder='Search...' onChange={() => { }} />
                    <button>Add new pack</button>
                </div>
                <table className={s.packList}>
                    <tr>
                        <th className={s.tableHeader}> Question</th>
                        <th className={s.tableHeader}> Answer</th>
                        <th className={s.tableHeader}> Last updated</th>
                        <th className={s.tableHeader}> Grade</th>
                    </tr>
                    {cards && cards.map((card: any) => {
                        return <tr key={card._id}>
                            <td>{card.question}</td>
                            <td>{card.answer}</td>
                            <td>{card.updated}</td>
                            <td>{card.grade}</td>
                        </tr>
                    })}
                </table>
                <Paginator totalCount={cardsTotalCount} />
            </div>
            <button onClick={onClickTestHandler}>TEST CARDS</button>
        </div>
    )
}
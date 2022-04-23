import React from 'react'
import s from './Cards.module.css'
import { Paginator } from '../pagination/Pagination'
import { responseCardsThunkCreator } from '../../BLL/cardsReducer'
import { useDispatch } from 'react-redux'

export const Cards = () => {

    const dispatch = useDispatch()

    const onClickTestHandler = ()=>{
        dispatch(responseCardsThunkCreator())
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
                    <tr>
                        <td>dfgd</td>
                        <td>dfgdfg </td>
                        <td>dfgdfg</td>
                        <td>dfgdfgdfdfg</td>
                    </tr>
                </table>
                <Paginator />
            </div>
            <button onClick={onClickTestHandler}>TEST CARDS</button>
        </div>
    )
}
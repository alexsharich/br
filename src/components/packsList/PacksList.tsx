import { Pages } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { deletePackTC, getPacksListTC } from '../../BLL/packsListReducer'
import { AppRootStateType } from '../../BLL/store'
import { apiCards } from '../../DAL/api'
import { Paginator } from '../pagination/Pagination'
import s from './PacksList.module.css'

export const PacksList = () => {

    useEffect(() => {
        dispatch(getPacksListTC(1))
    }, [])

    const dispatch = useDispatch()
    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)
    const cardPacks = useSelector<AppRootStateType, any>(state => state.packs.cardPacks)
    const cardPacksTotalCount = useSelector<AppRootStateType, any>(state => state.packs.pageCount)

    const deletePack = (id: string) => {
        dispatch(deletePackTC(id))
    }

    if (!auth) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <h2>Packs list</h2>
            <div >
                <div>
                    <input type="text" placeholder='Search...' onChange={() => { }} />
                    <button>Add new pack</button>
                </div>
                <table className={s.packList}>
                    <tr>
                        <th className={s.tableHeader}> Name</th>
                        <th className={s.tableHeader}> Cards</th>
                        <th className={s.tableHeader}> Last updated</th>
                        <th className={s.tableHeader}> Created by</th>
                        <th className={s.tableHeader}> Action</th>
                    </tr>
                    {cardPacks && cardPacks.map((pack: any) => {

                        const onDeleteClickHandler = (id: string) => {
                            deletePack(id)
                        }

                        return <tr key={pack._id}>
                            <td>{pack.name}</td>
                            <td>{pack.cardsCount}</td>
                            <td>{pack.updated}</td>
                            <td>{pack.created}</td>
                            <td>
                                <button className={s.deletePackButton}
                                    onClick={() => { onDeleteClickHandler(pack._id) }}>del</button>
                                <button>edit</button>
                                <button>learn</button></td>
                        </tr>
                    })}

                </table>
                <Paginator totalCount={cardPacksTotalCount}/>

            </div>
        </div>
    )
}
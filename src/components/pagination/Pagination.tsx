import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPacksListTC } from "../../BLL/packsListReducer";
import s from './Pagination.module.css'

type PaginatorPropsType = {
    totalCount: number
}

export const Paginator = ({ totalCount }: PaginatorPropsType) => {

    const dispatch = useDispatch()

    const getPage = (page: number) => {
        dispatch(getPacksListTC(page))
    }

    let pageNumber = []

    for (let i = 1; i <= totalCount; i++) {
        pageNumber.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                <div className={s.numberPage}>{'<'}</div>
                {pageNumber.map(pageNumber => {
                    return <span className={s.numberPage} onClick={() => getPage(pageNumber)} >{pageNumber}</span>
                })}
                <div className={s.numberPage}>{'>'}</div>
            </div>
            <div>
                <span>Show</span>
                <select >
                    {pageNumber.map(page => {
                        return <option >{page}</option>
                    })}
                </select>
                <span>cards per Page</span>
            </div>
        </div>
    )
}
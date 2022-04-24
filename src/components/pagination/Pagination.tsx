import React from "react";
import s from './Pagination.module.css'

type PaginatorPropsType = {
    totalCount: number
}

export const Paginator = ({ totalCount }: PaginatorPropsType) => {

    let totalpagesCount = []

    for (let i = 0; i <= totalCount; i++) {
        totalpagesCount.push(i)
    }

    return (
        <div>
            <div className={s.pagination}>
                <div className={s.numberPage}>{'<'}</div>
                {totalpagesCount.map(totalpagesCount => <span className={s.numberPage}>{totalpagesCount}</span>)}
                <div className={s.numberPage}>{'>'}</div>
            </div>
            <div>
                <span>Show</span>
                <select  >
                    {totalpagesCount.map(page => {
                        return <option >{page}</option>
                    })}
                </select>
                <span>Cards per Page</span>
            </div>
        </div>
    )
}
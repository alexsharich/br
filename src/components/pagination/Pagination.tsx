import React from "react";
import s from './Pagination.module.css'

export const Paginator = () => {

    let pages: number = 10
    let renderPage = []

    for (let i = 0; i <= pages; i++) {
        renderPage.push(i)
    }

    return (
        <div className={s.pagination}>
            <div className={s.numberPage}>{'<'}</div>
            {renderPage.map(numberPage => <span className={s.numberPage}>{numberPage}</span>)}
            <div className={s.numberPage}>{'>'}</div>
        </div>
    )
}
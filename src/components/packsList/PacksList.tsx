import { Pages } from '@material-ui/icons'
import React from 'react'
import { Paginator } from '../pagination/Pagination'
import s from './PacksList.module.css'

export const PacksList = () => {



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
                    <tr>
                        <td>dfgd</td>
                        <td>dfgdfg </td>
                        <td>dfgdfg</td>
                        <td>dfgdfgdfdfg</td>
                        <td>dfgfdg</td>
                    </tr>
                </table>
                <Paginator />
            </div>
        </div>
    )
}
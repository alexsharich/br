import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { forgotThunkCreator } from '../../BLL/loginReducer'
import s from './Forgot.module.css'

export const Forgot = () => {

    let [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch(forgotThunkCreator(email))
    }


    return (
        <div className={s.forgot}>
            <h3>FORGOT</h3>
            <input value={email} type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler} >send</button>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    )
}
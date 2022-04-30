import React, { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { registerThunkCreator } from '../../BLL/registerReducer'
import { AppRootStateType } from '../../BLL/store'
import s from './Register.module.css'

export const Register = () => {

    let [password, setPassword] = useState('nya-admin@nya.nya')
    let [email, setEmail] = useState('1qazxcvBG')

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    const dispatch = useDispatch()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onClickSendRegisterInfo = () => {
        dispatch(registerThunkCreator(email, password))
    }

    if (auth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={s.register}>
            <h3>REGISTRATION</h3>
            <input type="text" value={email} onChange={onChangeEmailHandler} />
            <input type="password" value={password} onChange={onChangePasswordHandler} />
            <input type="password" value={password} onChange={onChangePasswordHandler} />
            <button onClick={onClickSendRegisterInfo}>sign up</button>
        </div>
    )
}
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { setNewPasswordThunkCreator } from "../../BLL/loginReducer";
import { AppRootStateType } from "../../BLL/store";
import s from './SetPassword.module.css'

export const SetPassword = () => {

    const params = useParams<'*'>()

    const token = params['*']

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    let [firstPassword, setFirstPassword] = useState('')
    let [secondPassword, setSecondPassword] = useState('')

    const dispatch = useDispatch()

    const onChangeFirstHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstPassword(e.currentTarget.value)
    }
    const onChangeSecondHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(e.currentTarget.value)
    }

    const onSendClickHandler = () => {
        if (firstPassword === secondPassword) {
            dispatch(setNewPasswordThunkCreator(firstPassword, token))
        } else {
            alert('Incorrect password')
        }
    }

    if (auth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={s.setPassWord}>
            <h3>SET PASSWORD</h3>
            <input type="text" value={firstPassword} onChange={onChangeFirstHandler} />
            <input type="text" value={secondPassword} onChange={onChangeSecondHandler} />
            <button onClick={onSendClickHandler}>Set password</button>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    )
}
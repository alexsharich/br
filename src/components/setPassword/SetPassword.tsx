import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setNewPasswordThunkCreator } from "../../BLL/loginReducer";
import s from './SetPassword.module.css'

export const SetPassword = () => {

    /// useParams /// token /// to thunk

    let token = 'token'

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
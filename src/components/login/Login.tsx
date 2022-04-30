import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginThunkCreator } from "../../BLL/loginReducer";
import { AppRootStateType } from "../../BLL/store";
import s from './Login.module.css'

export const Login = () => {

    let [email, setEmail] = useState('nya-admin@nya.nya')
    let [password, setPassword] = useState('1qazxcvBG')
    let [rememberMe, setRememberMe] = useState(false)

    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    const dispatch = useDispatch()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }
    const SendLoginInfo = () => {
        dispatch(loginThunkCreator(email, password, rememberMe))
    }

    if (auth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <div className={s.loginization}>
                <h3>LOGIN</h3>
                <input type="text"
                    value={'nya-admin@nya.nya'}
                    onChange={onChangeEmailHandler} />
                <input type="text"
                    value={'1qazxcvBG'}
                    onChange={onChangePasswordHandler} />
                <input type="checkbox" name='remember me' onChange={onChangeRememberMeHandler} />
                <button onClick={SendLoginInfo} >sign in</button>
                <NavLink to={'/forgot'}>Forgot</NavLink>
            </div>
        </div>
    )
}
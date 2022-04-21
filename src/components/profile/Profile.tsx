import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authThunkCreator } from "../../BLL/authReducer";
import { logoutThunkCreator } from "../../BLL/loginReducer";
import { AppRootStateType } from "../../BLL/store";
import { UserType } from "../../DAL/api";

import s from './Profile.module.css'

export const Profile = () => {

    const email = useSelector<AppRootStateType, string>(state => state.login.email)
    const id = useSelector<AppRootStateType, string>(state => state.login._id)
    const avatar = useSelector<AppRootStateType, string>(state => state.login.avatar)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logoutThunkCreator())
    }

    ///ошибка !!! дщпщге не работает !!! через сервер не идет запрос !!!//////

    if (!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <div className={s.profile}>
                <div >
                    <img className={s.avatar} src={avatar} alt="avatar" />
                </div>
                <div>
                    <h3>{id}</h3>
                    <h3>{email}</h3>
                    <button onClick={onClickHandler}>log out</button>
                </div>
            </div>
        </div>
    )
}


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logoutThunkCreator } from "../../BLL/loginReducer";
import { AppRootStateType } from "../../BLL/store";


import s from './Profile.module.css'

export const Profile = () => {

    const email = useSelector<AppRootStateType, string>(state => state.login.email)
    const id = useSelector<AppRootStateType, string>(state => state.login._id)
    const avatar = useSelector<AppRootStateType, string>(state => state.login.avatar)
    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logoutThunkCreator())
    }

    if (!auth) {
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


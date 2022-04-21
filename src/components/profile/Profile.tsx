import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authThunkCreator } from "../../BLL/authReducer";
import { logoutThunkCreator } from "../../BLL/loginReducer";
import { AppRootStateType } from "../../BLL/store";
import { ResponseAuthLoginType } from "../../DAL/api";

import s from './Profile.module.css'

export const Profile = () => {

    const email = useSelector<AppRootStateType, string>(state => state.login.email)
    const id = useSelector<AppRootStateType, string>(state => state.login._id)
    const avatar = useSelector<AppRootStateType,string>(state=>state.login.avatar)
    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.auth)

    const dispatch = useDispatch()

    const onClickHandler = () => {
       dispatch(authThunkCreator(false))
    }

    ///ошибка !!! дщпщге не работает !!! через сервер не идет запрос !!!//////
    
    /* 
    const checkAuth = useSelector<AppRootStateType, any>(state => state.checkAuth.checkAuth)
    const dispatch = useDispatch()
    const pathImg = data.avatar ? data.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDf_Ep1nSHETPKv6j2oDp1DrM-FePAz2XEA&usqp=CAU'

    const onClickHandler = () => {
        dispatch(checkAuthAC(false))
    }
    useEffect(() => {
        dispatch(authThunkCreator())
    }, [])

    if (!checkAuth) {
        return <Navigate to='/login' />
    } */
    if(!auth){
       return <Navigate to='/login'/>
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
                    <button onClick={onClickHandler}>logOut</button>
                </div>
            </div>
        </div>
    )
}

function checkAuthAC(arg0: boolean): any {
    throw new Error("Function not implemented.");
}

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Forgot } from '../forgot/Forgot'
import { Login } from '../login/Login'
import { Register } from '../register/Register'
import { NotFound } from '../notFound/NotFound'
import { Profile } from '../profile/Profile'
import s from './Routing.module.css'
import { SetPassword } from '../setPassword/SetPassword'


export const PATH = {
    LOGIN_PAGE: '/login',
    REGISTRATION_PAGE: '/registration',
    PROFILE: '/profile',
    CHANGE_PASSWORD: '/forgot',
    SET_PASSWORD: '/setPassword',
    NOT_FOUND: '/404',
    NEW_URL: '*'
}

export const Routing = () => {
    return (
        <div className={s.pageRoute}>
            <Routes>
                <Route path={PATH.LOGIN_PAGE} element={<Login />} />
                <Route path={PATH.REGISTRATION_PAGE} element={<Register />} />
                <Route path={PATH.CHANGE_PASSWORD} element={<Forgot />} />
                <Route path={PATH.NOT_FOUND} element={<NotFound />} />
                <Route path={PATH.SET_PASSWORD} element={<SetPassword />} />
                <Route path={PATH.PROFILE} element={<Profile />} />
                <Route path={PATH.NEW_URL} element={<Navigate to='/404' />} />
            </Routes>
        </div>
    )
}
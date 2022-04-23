import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {

    return (
        <div className={s.header}>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/setPassword'}>Set Password</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/packs-list'}>Packs list</NavLink>
            <NavLink to={'/cards'}>Cards</NavLink>
        </div>
    )
}
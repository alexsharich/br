import React from "react";
import s from './Modal.module.css'


type ModalPropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children?: any
}

export const Modal = ({ active, setActive, children }: ModalPropsType) => {
    return (
        <div className={active ? `${s.modal} ${s.active} ` : `${s.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`}>
                {children}
            </div>
        </div>
    )
}
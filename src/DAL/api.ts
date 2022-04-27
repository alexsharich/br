import { Email } from "@material-ui/icons";
import axios, { AxiosResponse } from "axios";

const herokuBaseURLpath = 'https://neko-back.herokuapp.com/2.0'
const localhost = 'http://localhost:7542/2.0/'

const instance = axios.create({
    baseURL: localhost,
    withCredentials: true
})

export const api = {
    ping() {
        return instance.get('ping')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<any, AxiosResponse<UserType>, LoginType>('auth/login', { email: email, password: password, rememberMe: rememberMe })
    },
    register(email: string, password: string) {
        return instance.post('auth/register', { email: email, password: password })
    },
    me() {
        return instance.post('auth/me')
    },
    update(name: string, avatar: string) {
        return instance.put('auth/me', { name: name, avatar: avatar })
    },
    logout() {
        return instance.delete<any, AxiosResponse<ResponseDeleteType>>('auth/me')
    },
    forgot(email: string, from: string, message: string) {
        return instance.post('auth/forgot', { email: email, from: from, message: message })
    },
    newPassword(password: string, resetPasswordToken?: string) {
        return instance.post('auth-set-new-password', { password: password, resetPasswordToken: resetPasswordToken })
    }
}

type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}
type ResponseDeleteType = {
    info: string
    error?: string
}

export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string | null;
    publicCardPacksCount: number; // количество колод
    created: any;
    updated: any;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string | null;
}

export const apiCards = {
    getPacks(page:number=1) {
        return instance.get(`cards/pack?pageCount=10&page=${page}`)
    },
    addPack() {
        return instance.post('cards/pack')
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`)
    },
    updatePack() {
        return instance.put('cards/pack')
    },
    getCards() {
        return instance.get('cards/card')
    },
    addCard() {
        return instance.post('cards/card')
    },
    deleteCard(id: string) {
        return instance.delete(`cards/card?id=${id}`)
    },
    updateCard() {
        return instance.put('cards/card')
    }
}
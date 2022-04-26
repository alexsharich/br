import { loginReducer } from "../BLL/loginReducer"
import { UserType } from "../DAL/api"

let startState: StartStateType

beforeEach(() => {
    const startState = {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: null,
        createdDate: null,
        updated: null,
        isAdmin: false,
        verifed: false,
        rememberMe: false,
        error: '',
        created: null
    }
})
type StartStateType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: null,
    createdDate: null,
    updated: null,
    isAdmin: boolean,
    verifed: boolean,
    rememberMe: boolean,
    error: string,
    created: null
}

test('loginReducer', () => {



    const action = {
        type: 'LOGIN' as const,
        data: {
            _id: 'testId',
            email: 'testEmail',
            name: 'testName',
            avatar: 'testAvatar',
            publicCardPacksCount: 5,
            createdDate: null,
            updated: null,
            isAdmin: false,
            verified: false,
            rememberMe: false,
            error: 'throw new Error',
            created: null
        }
    }

    const endState = loginReducer(startState, action)
    expect(endState.error).toBe('throw new Error')
})
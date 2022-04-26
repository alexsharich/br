import { authReducer } from "../BLL/authReducer"
import { loginReducer } from "../BLL/loginReducer"
import { UserType } from "../DAL/api"

let startState: StartStateType

type StartStateType = {
    auth: boolean
}

beforeEach(() => {
    const startState = {
        auth: undefined
    }
})

test('auth should be authorized', () => {

    const action = {
        type: 'AUTH' as const,
        auth: true
    }
    const endState = authReducer(startState, action)
    expect(endState.auth).toBe(true)
})
test('auth should be authorized', () => {

    const action = {
        type: 'AUTH' as const,
        auth: false
    }
    const endState = authReducer(startState, action)
    expect(endState.auth).toBe(false)
})



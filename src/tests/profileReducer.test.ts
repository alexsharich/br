import { profileReducer } from "../BLL/profileReducer";

let startState: any;

beforeEach(() => {
    startState = {
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
        error: ''
    }
})
test('profile should be setted', () => {
    const action = {
        type: 'SET-PROFILE',
        data: {
            _id: '3',
            email: 'gmail',
            name: 'some name',
            avatar: 'jpg',
            publicCardPacksCount: null,
            createdDate: null,
            updated: null,
            isAdmin: false,
            verifed: false,
            rememberMe: false,
            error: 'without error'
        }
    }

    const endState = profileReducer(startState, action)

    expect(endState.email).toBe('gmail')
})
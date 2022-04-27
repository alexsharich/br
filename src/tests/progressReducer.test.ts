import { progressReducer } from "../BLL/progressReducer"

let startState: any

beforeEach(() => {
    startState = {
        progress: true
    }
})

test('Progress should be correct', () => {

    const action = {
        type: "SET-PROGRESS" as const,
        progress: false
    }

    const endState = progressReducer(startState, action)

    expect(endState.progress).toBe(false)
})
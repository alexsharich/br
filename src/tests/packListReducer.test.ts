import { packsListReducer } from "../BLL/packsListReducer"

let startState: any

beforeEach(() => {
    startState = {
        cardPacks: [
            {
                _id: 'werwer',
                user_id: 'sdfsdf',
                name: 'sdfsdf',
                path: 'sdfsdf',
                cardsCount: 0,
                grade: 0,
                shots: 0,
                rating: 0,
                type: 'pack',
                created: 'sdfsd',
                updated: 'dfgfdg',
                _v: 0
            },
        ],
        cardPacksTotalCount: 14,
        maxCardsCount: 4,
        minCardsCount: 0,
        page: 1,
        pageCount: 4
    }
})

test('Packs list should be setted', () => {
    const action = {
        type: "SET-PACKSLIST" as const,
        cardPacks: {
            cardPacks: [
                {
                    _id: 'fghfghfgh',
                    user_id: 'sdfdfgfdgdfsdf',
                    name: 'sdfsdfgdfgdf',
                    path: 'sddfgdfgfsdf',
                    cardsCount: 5,
                    grade: 6,
                    shots: 7,
                    rating: 8,
                    type: 'qwe',
                    created: 'qweqwefdg',
                    updated: 'dfgdfgdfg',
                    _v: 0
                },
                {
                    _id: 'czxc',
                    user_id: 'zxcxz',
                    name: 'zxc',
                    path: 'zxczx',
                    cardsCount: 12,
                    grade: 11,
                    shots: 10,
                    rating: 9,
                    type: 'qwe',
                    created: 'zxc',
                    updated: 'zxc',
                    _v: 0
                },
            ],
            cardPacksTotalCount: 14,
            maxCardsCount: 4,
            minCardsCount: 0,
            page: 1,
            pageCount: 4
        }
    }
    const endState = packsListReducer(startState, action)

    expect(endState.cardPacks[0].rating).toBe(8)

})
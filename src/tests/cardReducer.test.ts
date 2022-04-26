import { cardsReducer } from "../BLL/cardsReducer";

let startState: StartStateType;

beforeEach(() => {
    startState = {
        cards: [
            {
                answer: '---',
                question: '---',
                cardsPack_id: '',
                grade: 0,
                rating: 0,
                shots: 0,
                type: '',
                user_id: '',
                created: '',
                updated: '---',
                __v: 0,
            }
        ],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 0,
        pageCount: 0,
        packUserId: ''
    }
})
type StartStateType = {
    cards: Array<CardType>,
    cardsTotalCount: number,
    maxGrade: number,
    minGrade: number,
    page: number,
    pageCount: number,
    packUserId: string
}
type CardType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: number,
}

test('cardsShould be added', () => {
    const action = {
        type: 'SET-CARDS' as const,
        cards: {
            cards: [
                {
                    answer: 'answer',
                    question: 'qqq',
                    cardsPack_id: '5',
                    grade: 5,
                    rating: 10,
                    shots: 5,
                    type: 'test',
                    user_id: '',
                    created: '',
                    updated: '---',
                    __v: 0,
                },
                {
                    answer: 'answer',
                    question: 'qqq',
                    cardsPack_id: '5',
                    grade: 5,
                    rating: 10000,
                    shots: 5,
                    type: 'test',
                    user_id: '',
                    created: '',
                    updated: '---',
                    __v: 0,
                }
            ],
            cardsTotalCount: 100,
            maxGrade: 7,
            minGrade: 10,
            page: 1000,
            pageCount: 3,
            packUserId: '555'
        }
    }

    const endState = cardsReducer(startState, action)

    expect(endState.cards[0].rating).toBe(10)
    expect(endState.cards[1].rating).toBe(10000)
})
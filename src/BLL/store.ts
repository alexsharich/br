import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./authReducer";
import { cardsReducer } from "./cardsReducer";
import { loginReducer } from "./loginReducer";
import { packsListReducer } from "./packsListReducer";
import { profileReducer } from "./profileReducer";
//import { profileReducer } from "./profileReducer";


const rootReducer = combineReducers({
    profile: profileReducer,
    login: loginReducer,
    auth: authReducer,
    packs: packsListReducer,
    cards:cardsReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>




import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./authReducer";
import { loginReducer } from "./loginReducer";
//import { profileReducer } from "./profileReducer";


const rootReducer = combineReducers({
    //profile: profileReducer,
    login: loginReducer,
    auth: authReducer,
   // checkAuth: checkAuthReducer
})



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>




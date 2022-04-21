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

/* const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
 */


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>




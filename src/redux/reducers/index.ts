import { UserActionsReducer } from "./UserActionsReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    userActionsReducer : UserActionsReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
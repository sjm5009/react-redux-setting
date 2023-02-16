import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./viewers/reduecer";

const rootReducer = combineReducers({
    subscribers: subscribersReducer,
    viewers: viewsReducer
})

export default rootReducer;
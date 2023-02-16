import { configureStore } from "@reduxjs/toolkit";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./viewers/reduecer";
import commentsReducer from "./comments/reducer"

const store = configureStore({ 
    reducer: {
        subscribers: subscribersReducer,
        viewers: viewsReducer,
        comments: commentsReducer
    }
})

export default store;
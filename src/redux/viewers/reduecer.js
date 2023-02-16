import { ADD_VIEW, REMOVE_VIEW } from "./types";

const initialState = {
    count: 0
}
const viewsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_VIEW:
            return {
                ...state,
                count: state.count + action.payload
            }
        case REMOVE_VIEW:
            return {
                ... state,
                count: state.count - action.payload
            }
        default: return state
    }
}

export default viewsReducer;

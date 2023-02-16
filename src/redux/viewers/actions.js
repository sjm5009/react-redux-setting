import { ADD_VIEW, REMOVE_VIEW } from "./types";

export const addView = (number) => {
    console.log(number);
    return {
        type: ADD_VIEW,
        payload: Number(number)
    }
}

export const removeView = (number) => {
    return {
        type: REMOVE_VIEW,
        payload: Number(number)
    }
}
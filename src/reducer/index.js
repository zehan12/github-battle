import * as actions from "../action/index";

export const initialState = {
    theme: "light"
}

export function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LIGHT:
            // localStorage.setItem("dark", false);
            return { ...state, theme: "light" };
        case actions.DARK:
            // localStorage.setItem("dark", true);
            return { ...state, theme: true };
        default:
            return state;
    }
}
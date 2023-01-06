import * as actions from "../action/index";

export const initialState = {
    theme: "light",
    language: "GB",
}

export function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LIGHT:
            // localStorage.setItem("dark", false);
            return { ...state, theme: "light" };
        case actions.DARK:
            // localStorage.setItem("dark", true);
            return { ...state, theme: "dark" };
        case actions.LANGUAGE:
            console.log(action, "action in language")
            return { ...state, language: action.language }
        default:
            return state;
    }
}
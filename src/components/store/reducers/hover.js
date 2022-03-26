import {TOGGLE_HOVER} from "../action/actionTypes";

const initialState = {
    hover: false
}

export default function hoverReducer(state = initialState, action) {
    switch (action.type){
        case TOGGLE_HOVER:
            return {
                hover: !state.hover
            }
        default:
            return state
    }
}
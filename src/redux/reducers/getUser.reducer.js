import {GET_USER} from "../types";

const initialState = {
    currentUser: ''
}

export const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return {...state}
    }
}
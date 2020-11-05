import {GET_USER} from "../types";

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }
}
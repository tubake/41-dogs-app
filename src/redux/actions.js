import * as actionTypes from "./actionTypes";
import axios from "axios";

const apiHost = "https://5ea5690e2d86f00016b45c75.mockapi.io";


export const addFavorite = (dogId) => {
    return dispatch => {
        dispatch({
            type: GET_STATUS,
            payload: dogId
        })
        axios.post(`${apiHost}/favorites`, {dogId})
        .then((result) => {
            const addFavorite = result.data;
            dispatch({
                type: ADD_FAVORITE,
                payload: addFavorite
            })
            dispatch({
                type: DISABLED_BUTTON,
                payload: dogId
            })
        })
    }
};

export const removeFavorite = (id,dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        })
        axios.delete(`${apiHost}/favorites/${id}`).then((result) => {
            dispatch({
                type: REMOVE_FAVORITE,
                payload: id
            })
            dispatch({
                type: RESET_STATUS,
                payload: dogId
            })
        })
    }

};

export const fetchData = () => {
    return dispatch => {
        dispatch({
            type: LOADING
        })
        axios.get(`${apiHost}/favorites`).then((result) => {
            dispatch({
                type: FETCH_DATA,
                payload: result.data
            })
            dispatch({
                type: LOAD_FAVORITE
            })
        })
    }
};

export const getStatus = (dogId) => {
    return dispatch => {
        dispatch({
            type: GET_STATUS,
            payload: dogId
        })
    }
}

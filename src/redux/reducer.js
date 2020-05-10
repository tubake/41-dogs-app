import * as actionTypes from "./actionTypes"
import initialState from "./initialState"

const initialState= {
    favorites: [],
    loadingFavorites:false,
    disabled: ""
    
}


export const favoritesReducer = (state= initialState, actions) => {
    switch(action.type){
        case ADD_FAVORITE :
            return[...state.favorites, actions.payload]
        case REMOVE_FAVORITE :
            return state.favorites.filter(dog =>{
                return dog.dogId !== actions.payload
            })
        case actionTypes.LOAD_FAVORITE :
            return{...state, loadingFavorites: true}
        case actionTypes.DISABLED_BUTTON :
            return{...state, loadingFavorites: false}    
        default:
            return state    

    }
}
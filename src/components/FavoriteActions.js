import React from 'react';
import {Button} from "reactstrap";
import { connect } from "react-redux";
import { addFavorite, removeFavorite, getStatus } from '../redux/actions';

const FavoriteActions = (props) => {
    const foundDog = props.favorites.find(fav => fav.dogId === props.id);
    return (
        <div>
            {
                foundDog ?
                
                <Button color="danger" onClick={() => {props.removeFavorite(foundDog.id,props.id)}}>Favorilerden Cikar</Button>
                : <Button color="primary" onClick={() => {props.addFavorite(foundDog.id,props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        favorites: state.favoriteReducer,
        loadingId: state.statusReducer.loadingId
    }
}

const mapDispatchToProps = {
    addFavorite,
    removeFavorite,
    getStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
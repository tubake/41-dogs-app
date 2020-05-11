import React from 'react';
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import classes from './Dog.module.css';
import PropTypes from 'prop-types';


const Dog = ({ id, name, image }) => {
    return (
        <div className={classes.DogItem}>
            <div className={classes.DogImg}>
                <img src={image} alt={name} className={classes.Image} />
            </div>

            <div className={classes.Title}>
                <div className={classes.Link}>
                    <Link to={`/detail/${id}`}>
                        {name}
                    </Link>
                </div>
                <div>
                    <FavoriteActions
                        id={id}
                    />
                </div>
            </div>
        </div>
    );
};

Dog.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string
};

Dog.defaultProps = {
    id: "Not found",
    name: "Not found"
}

export default Dog;
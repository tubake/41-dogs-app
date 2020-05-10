import React from 'react';
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import {connect} from 'react-redux';
import {fetchData} from "../redux/actions"


//const apiHost = "https://5ea5690e2d86f00016b45c75.mockapi.io";

class Homepage extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        if (this.props.loadingFavorites) {
            return <div>
                <h1>Loading...</h1>
            </div>
        }
        return (
            <div>
                {
                    dogs.map((dog) => {
                        return <Dog
                            key={dog.id}
                            id={dog.id}
                            {...dog}
                        />
                    })
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchData : fetchData

}

const mapStateToProps = state => {
    const {favorites, disabled, loadingFavorites} = state
    return {
        favorites,
        loadingFavorites,
        disabled
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
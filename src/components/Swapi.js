import React from 'react';

class Swapi extends React.Component {
    render() {

        return(
            <div>
                <h1>Name: {this.props.character.name}</h1>
                <h2>Height: {this.props.character.height}</h2>
            </div>
        );
    }
}

export default Swapi;
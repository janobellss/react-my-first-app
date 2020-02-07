import React from 'react';

class Conditional extends React.Component {
    render() {

        console.log("CONDITIONAL: " + this.props.isLoading);

        if(this.props.isLoading) {
            return(
                <div>
                    <h1>PAGE IS LOADING...</h1>
                </div>
            );
        } else {
            return(
                <div>
                    <h1>WEB CONTENT</h1>
                </div>
            );
        }
    }
}

export default Conditional;
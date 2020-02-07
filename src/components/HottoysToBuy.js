import React from 'react';

/*function HottoysToBuy(props) {
    //console.log(props);

    return (
        <div className='hottoys-to-buy-comp'>
            <input type='checkbox' checked={props.product.preordered}></input>
            <p>{props.product.item}</p>
        </div>
    );
}*/

class HottoysToBuy extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    /*changeHandler(evt) {
        console.log("CHANGE HANDLER! " + evt.target.value);
        //this.props.handleChange(this.props.product.id) <<-- THIS WILL NOT WORK
    }*/

    render() {

        // const completedStyle = {
        //     fontStyle: this.props.product.preordered ? 'italic' : 'normal',
        //     color: this.props.product.preordered ? '#cdcdcd' : '#000',
        //     textDecoration: this.props.product.preordered ? 'line-through' : 'none'
        // }

        const completedStyle = {
            fontStyle: 'italic',
            color: '#cdcdcd',
            textDecoration: 'line-through'
        }

        return(
            <div className='hottoys-to-buy-comp'>
                <input 
                    type='checkbox' 
                    checked={this.props.product.preordered} 
                    //onChange={this.changeHandler}
                    onChange={() => {this.props.handleChange(this.props.product.id)}}
                    //onChange={function(){this.props.handleChange(this.props.product.id)}} <<-- THIS WILL NOT WORK
                />
                <p style={this.props.product.preordered ? completedStyle : null}>{this.props.product.item}</p>
            </div>
        );
    }
}

export default HottoysToBuy;
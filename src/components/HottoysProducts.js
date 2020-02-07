import React from 'react';

function HottoysProducts(props) {
    //console.log(props.product);

    const styleName = {
        color: 'rgba(0,0,0,1)'
    }

    const stylePrice = {
        color: 'rgba(235,52,52,0.9)'
    }

    const styleQuote = {
        color: 'rgba(0,0,0,0.7)'
    }

    return (
        <div>
            <h2 style={styleName}>Name: {props.product.name}</h2>
            <h3 style={stylePrice}>Price: {props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'Php'})}</h3>
            <h3 style={styleQuote}>Quote: {props.product.quote}</h3>
            <hr></hr>
        </div>
    );
}

export default HottoysProducts;
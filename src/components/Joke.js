import React from 'react';

function Joke(props) {
    //console.log(props.joke);

    const styleQuestion = {
        //display: props.joke.question ? 'block' : 'none'
        display: props.question ? 'block' : 'none'
    }

    const stylePunchline = {
        //color: props.joke.question ? 'rgb(0,0,0)' : 'rgba(0,0,0,0.5)'
        color: props.question ? 'rgb(0,0,0)' : 'rgba(0,0,0,0.5)'
    }

    return (
        <div className='joke-comp'>
            {/*<h2 style={styleQuestion}>Question: {props.joke.question}</h2>
            <h2 style={stylePunchline}>Punchline: {props.joke.punchline}</h2>*/}
            <h2 style={styleQuestion}>Question: {props.question}</h2>
            <h2 style={stylePunchline}>Punchline: {props.punchline}</h2>
            <hr></hr>
        </div>
    );
}

export default Joke;
import React from 'react';
//import ReactDOM from 'react-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './customDatas/jokesData';
import HottoysProducts from './components/HottoysProducts';
import hottoysProductsData from './customDatas/hottoysProductsData';
import HottoysToBuy from './components/HottoysToBuy';
import hottoysToBuyData from './customDatas/hottoysToBuyData';
import Header2 from './components/Header2';
import Greeting from './components/Greeting';
import Conditional from './components/Conditional';
import Swapi from './components/Swapi';
import PassengerInfo from './components/PassengerInfo';
import FormComponentLogic from './components/FormComponentLogic';

//import logo from './logo.svg';
import './App.css';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//function App() { //COMMENT OUT
  //4TH TEST
  /*const nums = [1,2,3,4,5,6,7,8,9,10];

  nums.map(function(num) {
    console.log(num)
  });

  console.log(nums);*/

  /*const jokeComponents = jokesData.map(function(joke) {
    return (
      <Joke 
        key={joke.id} 
        question={joke.question} 
        punchline={joke.punchline} 
      />
    );
  });*/

  //5TH TEST
  /*const hottoysProductsComponent = hottoysProductsData.map(function(hottoysprod) {
    //console.log(hottoysprod.id);
    //console.log(hottoysprod.name);
    //console.log(hottoysprod.price);
    //console.log(hottoysprod.quote);

    return (
      <HottoysProducts 
        key={hottoysprod.id}
        product={hottoysprod}
      />
    );
  });*/

  //6TH TEST
  /*const hottoysToBuyDataComp = hottoysToBuyData.map(function(item) {
    //console.log(item);
    //console.log(item.id);
    //console.log(item.item);
    //console.log(item.price);
    //console.log(item.preordered);

    return (
      <div>
        <HottoysToBuy 
          key={item.id} 
          product={item}
        />
      </div>
    );
  });*/

  //return ( //COMMENT OUT
    //1ST TEST
    /*<div>
      <Header />
      <MainContent />
      <Footer />
    </div>*/

    //2ND TEST
    /*<div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>*/

    //3RD TEST
    /*<div className='contacts'>
      <ContactCard 
        contact={{
          name:'Mr. Whiskerson', 
          imgUrl:'http://placekitten.com/300/200', 
          phone:'(212) 555-1234', 
          email:'mr.whiskaz@catnap.meow'
        }}
      />

      <ContactCard 
        contact={{
          name:'Fluffykins',
          imgUrl:'http://placekitten.com/400/200', 
          phone:'(212) 555-2345', 
          email:'fluff@me.com'
        }}
      />

      <ContactCard 
        contact={{
          name:'Destroyer',
          imgUrl:'http://placekitten.com/400/300',
          phone:'(212) 555-3456',
          email:'ofworlds@yahoo.com'
        }}
      />

      <ContactCard 
        contact={{
          name:'Felix',
          imgUrl:'http://placekitten.com/200/100',
          phone:'(212) 555-4567',
          email:'thecat@hotmail.com'
        }}
      />
    </div>*/

    //4TH TEST
    /*<div className='joke'>
      {jokeComponents}
    </div>*/

    /*<div className='joke'>
      <Joke
        joke={{
          question:'What happened when the frog’s car broke down on the side of the road?',
          punchline:'It gets toad away.'
        }} 
      />

      <Joke
        joke={{
          punchline:'My email password has been hacked. That’s the third time I’ve had to rename the cat.'
        }} 
      />
    </div>*/

    //5TH TEST
    /*<div>
      {hottoysProductsComponent}
    </div>*/

    //6TH TEST
    /*<div className="hottoys-to-buy-list">
      {hottoysToBuyDataComp}
    </div>*/
  //); //COMMENT OUT
//} //COMMENT OUT

//7TH TEST
/*class App extends React.Component {
  render () {

    const name = 'Jano';

    return (
      <div>
        <Header2 username={name}/>
        <Greeting />
      </div>
    );
  }
}*/

//8TH TEST
/*class App extends React.Component {
  constructor () {
    super();
    this.state = {
      answer: 'Yes'
    }
  }

  render () {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
      </div>
    );
  }
}*/

//9TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Jano',
      age: '30'
    }
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}*/

//10TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: true
    }
  }

  render() {
    let loggedIn = 'in';

    console.log("HAHA: " + this.state.isLoggedin);

    if(this.state.isLoggedin) {
      loggedIn = 'in';
    } else {
      loggedIn = 'out';
    }

    return(
      <div>
        <h1>You are currently logged {loggedIn}</h1>
      </div>
    );
  }
}*/

//11TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      htToBuy: hottoysToBuyData
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    //console.log("HANDLE CHANGE! " + id);
    this.setState((prevState) => {
      const updatedHottoysToBuy = prevState.htToBuy.map(item2 => {
        //console.log(item2);
        //console.log(item2.id);
        //console.log(item2.item);
        //console.log(item2.price);
        //console.log(item2.preordered);
        if(item2.id === id) {
          item2.preordered = !item2.preordered;
        }
        return item2
      });
      return {
        htToBuy: updatedHottoysToBuy
      }
    });
  }
  
  render() {
    //const hottoysToBuyDataComp = this.state.htToBuy.map(function(item) {
      //console.log(item);
      //console.log(item.id);
      //console.log(item.item);
      //console.log(item.price);
      //console.log(item.preordered);
  
      //return (
        //<div>
          //<HottoysToBuy 
            //key={item.id} 
            //product={item}
            //handleChange={this.handleChange}
          ///>
        //</div>
      //);
    //});

    const hottoysToBuyDataComp = this.state.htToBuy.map(item => <HottoysToBuy key={item.id} product={item} handleChange={this.handleChange}/>)

    return(
      <div className="hottoys-to-buy-list">
        {hottoysToBuyDataComp}
      </div>
    );
  }
}*/

//12TH TEST
/*class App extends React.Component {
  onMouseEventHandler2(evt) {
    console.log("MOUSE EVENT IS: " + evt.type);
  }

  render() {

    return(
      <div>
        <img src='https://www.fillmurray.com/200/100' onMouseOver={this.onMouseEventHandler2} onMouseOut={this.onMouseEventHandler2}/>
        <br/>
        <br/>
        <button onClick={this.onMouseEventHandler2}>CTA</button>
      </div>
    );
  }
}*/

// https://reactjs.org/docs/events.html#supported-events
/*function onMouseEventHandler(evt) {
  console.log("MOUSE EVENT IS: " + evt.type);
}*/

//13TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }

    this.onMouseEventHandler = this.onMouseEventHandler.bind(this);
  }

  onMouseEventHandler(evt) {
    //console.log("ON MOUSE EVENT: " + evt.type);
    //this.setState({ value: 1 });
    this.setState(function(prevState){
      console.log("SET STATE FUNCTION! " + prevState.value);
      return {
        value: prevState.value + 1
      }
    });
  }

  render() {

    return(
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.onMouseEventHandler}>CLICK ME</button>
      </div>
    );
  }
}*/

//14TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ageIsJustANumber: 15
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(evt) {
    //console.log("CLICK!! " + evt.currentTarget.name);
    //this.setState({ageIsJustANumber:20});

    switch(evt.currentTarget.name) {
      case "btn1":
        this.setState(function(prevState){
          return {
            ageIsJustANumber: prevState.ageIsJustANumber + 1
          }
        });
      break;

      case "btn2":
          this.setState(function(prevState){
            return {
              ageIsJustANumber: prevState.ageIsJustANumber - 1
            }
          });
      break;
    }
  }

  render() {

    return(
      <div>
        <h3>The Age is: {this.state.ageIsJustANumber}</h3>
        <button id='b1' name='btn1' onClick={this.clickHandler}>ADD AGE</button>
        <button id='b2' name='btn2' onClick={this.clickHandler}>SUBTRACT AGE</button>
      </div>
    );
  }
}*/

//15TH TEST
/*class App extends React.Component {
  constructor() {
    console.log("CONSTRUCTOR!");

    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT!");
    //this.setState(() => {console.log("SET STATE");});

    setTimeout(() => {
      console.log("SET TIMEOUT!");
      this.setState( {isLoading: false} );
    }, 1500);
  }

  render() {
    console.log("RENDER!");

    return(
      <div>
        <Conditional isLoading={this.state.isLoading}/>
      </div>
    );
  }
}*/

//16TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log("HANDLE CLICK! " + this.state.isLoggedIn);
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    });
  }

  render() {

    let loggedInStatus = '';
    let btnStatus = '';

    if(this.state.isLoggedIn) {
      loggedInStatus = 'LOGGED IN';
      btnStatus = 'LOG OUT';
    } else {
      loggedInStatus = 'LOGGED OUT';
      btnStatus = 'LOG IN';
    }

    return(
      <div>
        <h1>You Are Currently: {loggedInStatus}</h1>
        <button onClick={this.handleClick}>{btnStatus}</button>
      </div>
    );

    // return(
    //   <div>
    //     {
    //       this.state.isLoggedIn ? 
    //       <div>
    //         <h1>You Are Currently: LOGGED IN</h1>
    //         <button onClick={this.handleClick}>LOG OUT</button>
    //       </div>
    //       : 
    //       <div>
    //         <h1>You Are Currently: LOGGED OUT</h1>
    //         <button onClick={this.handleClick}>LOG IN</button>
    //       </div>
    //     }
    //   </div>
    // );
  }
}*/

//17TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      character: {}
    }
  }

  componentDidMount() {
    //console.log("COMPONENT DID MOUNT");

    this.setState({isLoading: true});
    
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          isLoading: false,
          character: data
        });
      })
  }

  render() {
    //console.log("RENDER");

    if(this.state.isLoading) {
      return(
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    } else {
      return(
        // <div>
        //   {this.state.character.name}
        // </div>
        <div>
          <Swapi character={this.state.character}/>
        </div>
      );
    }
  }
}*/

//18TH TEST
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      aboutMe: 'Tell me about yourself',
      isFriendly: false,
      gender: '',
      favColor: 'blue'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log("HANDLE CHANGE: " + event.target.value);
    //console.log("HANDLE CHANGE: " + event.target.name);

    const {name, value, type, checked} = event.target;
    
    //console.log("NAME: " + name);
    //console.log("VALUE: " + value);
    //console.log("TYPE: " + type);
    //console.log("CHECKED: " + checked);

    // this.setState({
    //   //[event.target.name]: event.target.value
    //   [name]: value
    // });

    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit() {
    console.log("SUBMIT!");
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='firstName' 
          value={this.state.firstName} 
          placeholder='First Name' 
          onChange={this.handleChange}
        />

        <br />

        <input 
          type='text' 
          name='lastName' 
          value={this.state.lastName} 
          placeholder='Last Name' 
          onChange={this.handleChange}
        />

        <br />

        <textarea 
          name='aboutMe'
          value={this.state.aboutMe} 
          onChange={this.handleChange}
        />

        <br />

        <label>
          <input 
            type='checkbox' 
            name='isFriendly' 
            checked={this.state.isFriendly} 
            onChange={this.handleChange} 
          /> Is Friendly?
        </label>

        <br />

        <label>
          <input 
            type='radio' 
            name='gender' 
            value='male'
            checked={this.state.gender === 'male'} 
            onChange={this.handleChange} 
          /> Male
        </label>

        <br />

        <label>
          <input 
            type='radio' 
            name='gender' 
            value='female'
            checked={this.state.gender === 'female'} 
            onChange={this.handleChange} 
          /> Female
        </label>

        <br />

        <select 
          name='favColor' 
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
          <option value='black'>Black</option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
        </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h1>You are a {this.state.gender}</h1>
        <h1>Your favorite color is: {this.state.favColor}</h1>

        <button>Submit</button>
      </form>
    );
  }
}*/

//19TH TEST
/*class App extends React.Component {
  render() {

    return(
      <div>
        <PassengerInfo />
      </div>
    );
  }
}*/

//20TH TEST
class App extends React.Component {
  render() {

    return(
      <div>
        <FormComponentLogic />
      </div>
    );
  }
}

export default App;
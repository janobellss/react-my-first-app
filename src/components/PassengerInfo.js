import React from 'react';

class PassengerInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            flightDes: '',
            dietResVeg: false,
            dietResKosher: false,
            dietResLacFree: false,
            dietResProtein: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {type, name, value, checked, validity} = event.target;

        // console.log("TYPE: " + type);
        // console.log("NAME: " + name);
        // console.log("VALUE: " + value);
        // console.log("CHECKED: " + checked);

        //type === 'checkbox' ? this.setState({ [name]:checked }) : this.setState({ [name]:value })

        //console.log("AGE: " + validity.valid);

        if(type === 'checkbox') {
            this.setState({ [name]:checked })
        } else if(type === 'number') {
            if(validity.valid) {
                this.setState({ [name]:value })
            }
        } else {
            this.setState({ [name]:value })
        }
    }

    handleSubmit() {
        let dietResString = '';

        if(this.state.dietResVeg) {
            dietResString+= 'Vegetarian';
        }

        if(this.state.dietResKosher) {
            dietResString+= ' Kosher';
        }

        if(this.state.dietResLacFree) {
            dietResString+= ' Lactose Free';
        }

        if(this.state.dietResProtein) {
            dietResString+= ' Protein Diet';
        }

        alert("First name: " + this.state.firstName + "\n" + 
            "Last name: " + this.state.lastName + "\n" + 
            "Age: " + this.state.age + "\n" + 
            "Gender: " + this.state.gender + "\n" + 
            "Location: " + this.state.flightDes + "\n" + 
            "Dietary restrictions: " + dietResString
        );
    }

    render() {

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={this.state.firstName} 
                        placeholder='First Name' 
                        onChange={this.handleChange}
                    />
                    <br/>

                    <input 
                        type='text' 
                        name='lastName' 
                        value={this.state.lastName} 
                        placeholder='Last Name' 
                        onChange={this.handleChange}
                    />
                    <br/>

                    <input 
                        type='number' 
                        name='age' 
                        value={this.state.age} 
                        placeholder='Age' 
                        onChange={this.handleChange}
                    />
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Male' 
                            checked={this.state.gender === 'Male'}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Female' 
                            checked={this.state.gender === 'Female'}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Other' 
                            checked={this.state.gender === 'Other'}
                            onChange={this.handleChange}
                        />Other
                    </label>
                    <br/>

                    <select 
                        name='flightDes' 
                        value={this.state.flightDes} 
                        onChange={this.handleChange}
                    >
                        <option value=''>-- Please choose a destination --</option>
                        <option value='Japan'>Japan</option>
                        <option value='Korea'>Korea</option>
                        <option value='Hong Kong'>Hong Kong</option>
                        <option value='Europe'>Europe</option>
                    </select>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResVeg'
                            checked={this.state.dietResVeg}
                            onChange={this.handleChange}
                        />Vegetarian
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResKosher'
                            checked={this.state.dietResKosher}
                            onChange={this.handleChange}
                        />Kosher
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResLacFree'
                            checked={this.state.dietResLacFree}
                            onChange={this.handleChange}
                        />Lactose Free
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResProtein'
                            checked={this.state.dietResProtein}
                            onChange={this.handleChange}
                        />Protein Diet
                    </label>
                    <br/>

                    <button>Sumbit</button>
                </form>

                <hr/>
                <h2>Entered Information:</h2>
                <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your Age: {this.state.age}</p>
                <p>Your Gender: {this.state.gender}</p>
                <p>Your Destination: {this.state.flightDes}</p>
                <p>
                    Your Dietary Restrictions:
                    {}
                </p>

            </div>
        );
    }
}

export default PassengerInfo;
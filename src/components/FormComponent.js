import React from 'react';

class FormComponent extends React.Component {
    render() {

        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={this.props.data.firstName} 
                        placeholder='First Name' 
                        onChange={this.props.handleChange}
                    />
                    <br/>

                    <input 
                        type='text' 
                        name='lastName' 
                        value={this.props.data.lastName} 
                        placeholder='Last Name' 
                        onChange={this.props.handleChange}
                    />
                    <br/>

                    <input 
                        type='number' 
                        name='age' 
                        value={this.props.data.age} 
                        placeholder='Age' 
                        onChange={this.props.handleChange}
                    />
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Male' 
                            checked={this.props.data.gender === 'Male'}
                            onChange={this.props.handleChange}
                        />Male
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Female' 
                            checked={this.props.data.gender === 'Female'}
                            onChange={this.props.handleChange}
                        />Female
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Other' 
                            checked={this.props.data.gender === 'Other'}
                            onChange={this.props.handleChange}
                        />Other
                    </label>
                    <br/>

                    <select 
                        name='flightDes' 
                        value={this.props.data.flightDes} 
                        onChange={this.props.handleChange}
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
                            checked={this.props.data.dietResVeg}
                            onChange={this.props.handleChange}
                        />Vegetarian
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResKosher'
                            checked={this.props.data.dietResKosher}
                            onChange={this.props.handleChange}
                        />Kosher
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResLacFree'
                            checked={this.props.data.dietResLacFree}
                            onChange={this.props.handleChange}
                        />Lactose Free
                    </label>
                    <br/>

                    <label>
                        <input 
                            type='checkbox' 
                            name='dietResProtein'
                            checked={this.props.data.dietResProtein}
                            onChange={this.props.handleChange}
                        />Protein Diet
                    </label>
                    <br/>

                    <button>Sumbit</button>
                </form>

                <hr/>
                <h2>Entered Information:</h2>
                <p>Your Name: {this.props.data.firstName} {this.props.data.lastName}</p>
                <p>Your Age: {this.props.data.age}</p>
                <p>Your Gender: {this.props.data.gender}</p>
                <p>Your Destination: {this.props.data.flightDes}</p>
                <p>
                    Your Dietary Restrictions:
                    {}
                </p>

            </div>
        );
    }
}

export default FormComponent;
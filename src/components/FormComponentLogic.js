import React from 'react';
import FormComponent from './FormComponent';

class FormComponentLogic extends React.Component {
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
                <FormComponent 
                    data={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default FormComponentLogic;
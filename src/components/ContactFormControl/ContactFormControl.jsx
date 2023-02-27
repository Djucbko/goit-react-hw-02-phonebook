import PropTypes from "prop-types";
import { FormWrapper, AddButton, InputForm } from "./ContactFormControl.styled";
import React, {Component} from 'react';

export class ContactFormControl extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({name: "", number: "",});
    }

    render() {
        const {name, number} = this.state;
        return (
            <FormWrapper onSubmit={this.handleSubmit}>
                <label htmlFor="name"> Name</label>
                    <InputForm 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required/>
                <label htmlFor="number"> Number</label>
                    <InputForm 
                    type='tel' 
                    name="number" 
                    value={number} 
                    onChange={this.handleChange} 
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required/>
                <AddButton type="submit">Add contact</AddButton>
            </FormWrapper>
    )
    }
}

ContactFormControl.propTypes = {
    addContact: PropTypes.func.isRequired,
}
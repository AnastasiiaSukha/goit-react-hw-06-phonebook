import React from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
import { Input, Label, Form, AddButton} from "./ContactForm.styled";


class ContactForm extends Component{

    state = {
    name: '',
    number: ''
    }

     handelInputChange = e => (
      this.setState({
        [e.currentTarget.name]: [e.currentTarget.value],}))

    handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit({
        name: this.state.name,
        number: this.state.number,
      });

      this.setState({
        name: '',
        number: ''
      });
    }

    render() {
        
        return (
             <Form onSubmit={this.handleSubmit}>
            <Label htmlFor="">Name
              <Input
                value={this.state.name}
                onChange={this.handelInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>
            <Label htmlFor="">Number
              <Input
                value={this.state.number}
                onChange={this.handelInputChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <AddButton type="submit">Add contact</AddButton>
          </Form>
        )
    }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

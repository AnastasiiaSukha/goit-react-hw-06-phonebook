import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Input, Label, Form, AddButton} from "./ContactForm.styled";


function  ContactForm ({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 

  const handelInputChange = e => {

    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  
  };
    
  
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);

    setName('');
    setNumber('');

  };

        
        return (
             <Form onSubmit={handleSubmit}>
            <Label htmlFor="">Name
              <Input
                value={name}
                onChange={handelInputChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>
            <Label htmlFor="">Number
              <Input
                value={number}
                onChange={handelInputChange}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

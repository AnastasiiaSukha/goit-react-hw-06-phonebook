import { useEffect } from "react";
import React from "react";
import ContactForm from "./Form/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { Container, MainTitle, SecondTitle } from "./Container.styled";
import { useDispatch } from "react-redux";
import { removeContact, addContact, setFilter, getFilterValue, getContacts } from "redux/contactsSlice";
import { useSelector } from 'react-redux/es/exports';



export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);




  const deleteContact = contactId => dispatch(removeContact(contactId));

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();
      
      
    return (
        <Container>
           <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={addContact} />
        
          <SecondTitle>Contacts</SecondTitle>
        <Filter value={filter} onChange={changeFilter}/>
         
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        
        />
          </Container>
      );

    }

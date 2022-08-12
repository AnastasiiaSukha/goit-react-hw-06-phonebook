import { useState, useEffect } from "react";
import React from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./Form/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactsList/ContactsList";
import { Container, MainTitle, SecondTitle } from "./Container.styled";



export default function App() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts'))?? '');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
      const normalizedName = name.toString().toLowerCase();

      

    contacts.forEach(contact => {

      if (contact.name.toString().toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);

        return;
      }
      
    });

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    
    setContacts(prevContacts => [contact,...prevContacts]);
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
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

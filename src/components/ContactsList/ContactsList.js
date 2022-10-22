import React from "react";
import PropTypes from 'prop-types';
import { List, DeleteButton} from "./ContactsList.styled";

const ContactsList = ({ contacts, onDeleteContact}) => {
       return <List>
        {contacts.map(({ name, id, number}) => (
            <li key={id}>{name}: {number}
         <DeleteButton
          type="button"
          onClick={()=>onDeleteContact(id)}
        >
          Delete
        </DeleteButton>
            </li>
        ))}
            </List>
}


ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
}

export default ContactsList;
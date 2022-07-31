import React from "react";
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

export default ContactsList;
import React from "react";

const ContactsList = ({ contacts, onDeleteContact}) => {
       return <ul>
        {contacts.map(({ name, id, number}) => (
            <li key={id}>{name}: {number}
         <button
          type="button"
          onClick={()=>onDeleteContact(id)}
        >
          Delete
        </button>
            </li>
        ))}
            </ul>
}

export default ContactsList;
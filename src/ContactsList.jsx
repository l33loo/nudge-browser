import React from 'react';
import Contact from './Contact.jsx';

const ContactsList = (props) => {
  const cont = props.contacts.map((contact) => {
    return <div><Contact contact={ contact } /><button name={ contact } onClick={ props.deleteContact } style={{cursor:'pointer'}}>Delete</button></div>;
  });

  return (
    <div className='contacts'>
      <div>
        <h1>Your emergency contacts<span onClick={ props.addContact } style={{cursor:'pointer'}}>+</span></h1><br />
        <ol>
          { cont }
        </ol>
      </div>
    </div>
  );
};

export default ContactsList;
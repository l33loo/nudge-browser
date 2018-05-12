import React from 'react';

const Contact = ({ contact }) => {
  return (
    <li className='contact'>
      <span className='contact-name'>{ contact.nickname }</span>
      <span className='contact-email'>{ contact.email }</span>
    </li>
  );
};

export default Contact;
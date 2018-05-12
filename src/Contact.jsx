import React from 'react';

const Contact = ({ contact }) => {
  return (
    <li className='contact'>
      <span className='contact-name'>{ contact.nickname }</span><br />
      <span className='contact-email'>{ contact.email }</span>
    </li>
  );
};

export default Contact;
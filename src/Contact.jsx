import React from 'react';

const Contact = ({ contact }) => {
  return (
    <li className='contact'>
      <div className='contact-name'>{ contact.nickname }</div>
      <div className='contact-email'>{ contact.email }</div>
    </li>
  );
};

export default Contact;
import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div className='contact'>
      <div>TEST</div>
      <div className='contact-name'>{ contact.nickname }</div>
      <div className='contact-email'>{ contact.email }</div>
    </div>
  );
};

export default Contact;
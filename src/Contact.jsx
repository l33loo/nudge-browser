import React from 'react';

const Contact = ({ contact }) => {
  return (
    <div className='contact'>
      <div className='contact-name'>{ contact.contactName }</div>
      <div className='contact-email'>{ contact.contactEmail }</div>
    </div>
  );
};

export default Contact;
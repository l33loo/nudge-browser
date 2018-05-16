import React from 'react';
const FontAwesome = require('react-fontawesome');

const Contact = (props) => {
  return (
    <div className='contact'>
      <div>
        <span className='contact-name'>{ props.contact.nickname }</span><br />
        <span className='contact-email'>{ props.contact.email }</span>
      </div>
      <button className="delete" name={ props.contact.nickname } value={ props.contact.email } onClick={ props.deleteContact } style={{cursor:'pointer'}}>X</button>
    </div>
  );
};

export default Contact;
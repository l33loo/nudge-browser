import React from 'react';
import Contact from './Contact.jsx';

const Main = ({ contacts }) => {
  const contact = contacts.map((contact) => (<Contact contact={ contact } />));
  return (
    <div className='contacts'>
      { contact }
    </div>
  );
};

export default Main;
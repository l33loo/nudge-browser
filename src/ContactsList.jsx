import React from 'react';
import Contact from './Contact.jsx';

const ContactsList = (props) => {
  const cont = props.contacts.map((contact, index) => {
    return <div><Contact key={ index } contact={ contact } /><button id="delete" name={ contact.nickname } value={ contact.email } onClick={ props.deleteContact } style={{cursor:'pointer'}}>Delete</button></div>;
  });

  const handleNotifications = () => {
    console.log(`NOTIFICATIONS ENABLED ${props.notificationStatus}`);
    if (props.contacts.length) {
      return props.notificationStatus ?
        <div>Notifications currently enabled (24-hour schedule)<button className="disable" onClick={ props.disableNotifications } style={{cursor:'pointer'}}>Disable notifications</button></div>
      :
        <div>Notifications currently disabled<button className="enable" onClick={ props.enableNotifications } style={{cursor:'pointer'}}>Enable notifications</button></div>;
    } else {
      // props.disableNotifications();
      return <div>You don't have emergency contacts yet.</div>;
    }
  }

  const notifButton = handleNotifications();

  return (
    <div className='contacts'>
      <div>
        <h1>Your emergency contacts<span onClick={ props.addContact } style={{cursor:'pointer'}}>+</span></h1><br />
        <ol>
          { cont }
        </ol>
        { notifButton }
      </div>
    </div>
  );
};

export default ContactsList;
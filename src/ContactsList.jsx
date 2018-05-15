import React from 'react';
import Contact from './Contact.jsx';
const FontAwesome = require('react-fontawesome');

const ContactsList = (props) => {
  const cont = props.contacts.map((contact, index) => {
    return <div className="contact"><Contact key={ index } contact={ contact } /><button id="delete" name={ contact.nickname } value={ contact.email } onClick={ props.deleteContact } style={{cursor:'pointer'}}>Delete</button></div>;
  });

  const handleNotifications = () => {
    console.log(`NOTIFICATIONS ENABLED ${props.notificationStatus}`);
    if (props.contacts.length) {
      return props.notificationStatus ?
          <ul>
            <li>Status: ENABLED</li>
            <li>Schedule: 24 hours of inactivity</li>
          </ul>
          <button className="disable" onClick={ props.disableNotifications } style={{cursor:'pointer'}}>Disable notifications</button>
      :
          <ul>
            <li>Status: DISABLED</li>
            <li className="strike">Schedule: 24 hours of inactivity</li>
          </ul>
          <button className="enable" onClick={ props.enableNotifications } style={{cursor:'pointer'}}>Enable notifications</button>
    } else {
      // props.disableNotifications();
      return <div>You haven't listed any emergency contacts.</div>;
    }
  }

  const lastActivity = () => {

  }

  const notifButton = handleNotifications();

  return (
    <div className='dashbord'>
      <h1>Dashbord</h1>
      <div className="dashbord-content">
        <div className="notifications">
          <h2>Notifications</h2>
          { notifButton }
          <h2>Activity</h2>
          { lastActivity }
        </div>
        <div className="contacts">
          <h2>Emergency contacts<FontAwesome className='add-contact' name='user-plus' onClick={ props.addContact } style={{cursor:'pointer'}} /></h2>
          <ol>
            { cont }
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContactsList;
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
        <div>
          <ul>
            <li>After 24 hours of inactivity</li>
            <li className="notification-status">Enabled</li>
          </ul>
          <button className="disable" onClick={ props.disableNotifications } style={{cursor: 'pointer'}}>Disable notifications</button>
        </div>
      :
        <div>
          <ul>
            <li className="strike">After 24 hours of inactivity</li>
            <li className="notification-status">Disabled</li>
          </ul>
          <button className="enable" onClick={ props.enableNotifications } style={{cursor: 'pointer'}}>Enable notifications</button>
        </div>
    } else {
      // props.disableNotifications();
      return <div>You haven't listed any emergency contacts.</div>;
    }
  }

  const timeLastActivity = Date.now() - props.lastRecordedActivity;

  const getTimeLastActivity = () => {
    let min = (timeLastActivity) / (1000 * 60);
    let hr = min / 60;
    let day = hr / 24;
    let week = day / 7;
    let month = day / 30;
    let yr = month / 12;

    min = Math.round(min);
    hr = Math.round(hr * 100) / 100;
    day = Math.round(day * 100) / 100;
    week = Math.round(week * 100) / 100;
    month = Math.round(month * 100) / 100;
    yr = Math.round(yr * 100) / 100;

    if (min === 0) {
      return "now";
    } else if (min === 1) {
      return  "1 minute ago";
    } else if (hr < 1) {
      return `${min} minutes ago`;
    } else if (hr === 1) {
      return "1 hour ago";
    } else if (day < 1) {
      return `${hr} hours ago`;
    } else if (day === 1) {
      return "1 day ago";
    } else if (week < 1) {
      return `${day} day ago`;
    } else if (week === 1) {
      return "1 week ago";
    } else if (month < 1) {
      return `${week} ago`;
    } else if (month === 1) {
      return "1 month ago";
    } else if (yr < 1) {
      return `${month} months ago`;
    } else if (yr === 1) {
      return "1 year ago";
    } else {
      return `${yr} years ago`;
    }
  }

  const lastActivity = () => {
    const time = getTimeLastActivity();
    return timeLastActivity >= 86400000 ?
      <div><button className="activity-indicator-red"></button>{ time }</div>
    :
      <div><button className="activity-indicator-blue"></button>{ time }</div>;
  }

  const notifButton = handleNotifications();

  const lastTime = lastActivity();

  return (
    <div className='dashbord'>
      <h1>Dashboard</h1>
      <div className="dashbord-content">
        <div className="notifications">
          <h2>Notifications</h2>
          { notifButton }
          <h2>Last recorded activity</h2>
          { lastTime }
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
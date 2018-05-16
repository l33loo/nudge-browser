import React from 'react';
import Contact from './Contact.jsx';
const FontAwesome = require('react-fontawesome');

const Settings = (props) => {
  const cont = props.contacts.map((contact, index) => {
    return <div className="contact"><li><Contact key={ index } deleteContact={ props.deleteContact } contact={ contact } /></li></div>;
  });

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
      return "Now";
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
      <div><h2>Last recorded activity</h2><button className="activity-indicator-red"></button>{ time }</div>
    :
      <div><h2>Last recorded activity</h2><button className="activity-indicator-blue"></button>{ time }</div>;
  }

    const handleNotifications = () => {
    return props.notificationStatus ?
      <div className="notifications">
        <h2>Notifications<button className="on" onClick={ props.disableNotifications } style={{cursor: 'pointer'}}>ON</button></h2>
        <span className="inactivity">After 24 hours of inactivity</span>
      </div>
    :
      <div className="notifications">
        <h2>Notifications<button className="off" onClick={ props.enableNotifications } style={{cursor: 'pointer'}}>OFF</button></h2>
        <span className="inactivity">Disabled</span>
      </div>;
  };

  const notifications = handleNotifications();

  const lastTime = lastActivity();

  const handleSettings = () => {
    return props.contacts.length ?
      <div className="settings-content">
        <div className="left-panel">
          { notifications }
          { lastTime }
        </div>
        <div className="contacts">
          <h2>Emergency contacts<FontAwesome className='add-contact' name='plus' onClick={ props.addContact } style={{cursor:'pointer'}} /></h2>
            <ol>{ cont }</ol>
        </div>
      </div>
    :
      <div className="no-contacts">
        <h2>Emergency contacts<FontAwesome className='add-contact' name='plus' onClick={ props.addContact } style={{cursor:'pointer'}} /></h2>
        <span>You haven't listed any emergency contacts.</span>
      </div>;
  };

  const settings = handleSettings();

  return (
    <div className='settings'>
      <h1>Settings</h1>
        { settings }
    </div>
  );
};

export default Settings;

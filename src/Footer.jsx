import React from 'react';

const Footer = ({ contact }) => {
  return (
    <div className='Footer'>
      <div className="description">
        <h1>Description</h1>
        <span> NUDGE was developped as a final project for the Lighthouse Labs Web Development Bootcamp (Victoria - Mar 2018 Cohort).</span>
      </div>
      <div className="team">
        <h1>Team</h1>
        <span className="tom"><a href="https://github.com/tomgavant">Tom Avant</a></span>
        <span className="brian"><a href="https://github.com/Etherkavu">Brian Holden</a></span>
        <span className="lila"><a href="https://github.com/l33loo">Lila Karpowicz</a></span>
      </div>
    </div>
  );
};

export default Footer;
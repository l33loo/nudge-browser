import React from 'react';
import GoogleLogin from 'react-google-login';
const FontAwesome = require('react-fontawesome');

class Intro extends Component {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="intro">
      <div className="image-text">
        <h1>
          <span>IF YOU CAN'T REACH YOUR PHONE,<span className='spacer'></span><br />
          <span className='spacer'></span><span id="nudge">NUDGE</span> WILL DO IT FOR YOU.</span>
        </h1>
      </div>

      <GoogleLogin
        id='google-login'
        clientId="241417537066-elmbirp4ups9h0cjp73u70nkgur98nq4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ><FontAwesome name='google' />
      <span> Login with Google</span>
      </GoogleLogin>
    </div>
  );
}

export default Intro;



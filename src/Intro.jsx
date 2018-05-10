import React from 'react';
import GoogleLogin from 'react-google-login';
const FontAwesome = require('react-fontawesome');

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName = "Intro";
    }
    this.reponseGoogle = this.responseGoogle.bind(this);
  }

 responseGoogle(response) => {
    console.log(`GOOGLE RESPONSE! ${response}`);
    // if (response.type === 'success') {
      // console.log("GOOGLE LOGIN SUCCESS");
      // this.props.changePage('Main');
      fetch('https://nudge-server.herokuapp.com/contacts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: response.idToken
        }),
      })
      .then((resp) => {
        // props.updateState({ loggedIn: true });
        console.log(resp.status);
      })
      .then(() => {
        this.props.changePage('Main');
      })
      .catch((error) => {
        console.log("GOOGLE ERROR!!!");
        throw error;
      });
    // } else {
    //   console.log("GOOGLE ERROR!!!");
    // }
  }

  render() {
  return (
    <div className="Intro">
      <h1>
        <span>IF YOU GO DARK,<span className='spacer'></span><br />
        <span className='spacer'></span><span id="nudge">NUDGE</span> WILL RAISE THE FLAG.</span>
      </h1><br />

      <GoogleLogin
        id='google-login'
        clientId="241417537066-elmbirp4ups9h0cjp73u70nkgur98nq4.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
      ><FontAwesome name='google' />
      <span> Login with Google</span>
      </GoogleLogin>

    </div>
  );
}
}



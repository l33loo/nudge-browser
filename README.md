
# Nudge

Nudge is a mobile and browser app that notifies emergency contacts by email when it stops registering either movement on the user's cellphone via the mobile app, or activity on the browser version of the app. The current repo contains the code for the browser app (front-end).

The browser app was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and is deployed with Heroku [here](https://nudge-client-app.herokuapp.com).

This was a final project for Lighthouse Labs' Web Development Bootcamp, Victoria (BC) cohort of may 2018.

## Contributions

Lila Karpowicz (current app): concept, browser app (front-end)

[Tom Avant](https://github.com/tomgavant): [mobile app](https://github.com/l33loo/nudge-mobile) (front-end)

[Brian Holden](https://github.com/Etherkavu): [server app](https://github.com/l33loo/nudge-server) (back-end and database)

## Features

1. Users can login with a Google account
2. Logged-in users can add emergency contacts
3. Logged-in users can enable/disable email notifications sent to their contacts after 24 hours of inactivity on the app (on the browser app, activity is registered as mouse and keyboard events on the app; on the mobile app, activity is registered via phone movement)
4. Logged-in users can view when was the last time that the app registered their activity

## Final Product

Images to come.

## Getting Started

1. Clone this repo
2. Install dependencies using the `npm install` command
3. Initiate git via the `git init` command
4. Deploy to [Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration)

You can also check out the [currently-deployed version]([here](https://nudge-client-app.herokuapp.com) of the browser app!

## Dependencies

- React 16.3.x or above
- React-dom 16.3.x or above
- React-fontawesome 1.6.x or above
- React-google-login 3.2.x or above
- React-scripts 1.1.x or above







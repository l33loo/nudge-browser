const express = require('express');
const app = express();
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
      mailer = require('express-mailer');

const PORT = process.env.PORT || 5000;

// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}));

let myVar = setInterval(checkInCheck, 5000);

const activeusers = {
  'test': {
    name: 'test',
    count: 0
  },
  'xxjeffxx': {
    name: 'xxjeffxx',
    count: 0
  // },
  // 'Brianator': {count: 0
  }
};

mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'nudge.project.head@gmail.com',
    pass: 'lighthouse01'
  }
});

// For each user connected to the app, keeps counter.
// Once counter reaches 10, it sends an automated email to the user's contact.
function checkInCheck() {
  for (var user in activeusers){
    activeusers[user].count += 1; //can simplify to user.count
    console.log("test up", user, activeusers[user].count);
    if (activeusers[user].count > 10){
      console.log(`EMAIL SENT! ${user}`);
      activeusers[user].count = 0;
      // sendEmail('nudge.project.head@gmail.com');
      // activeusers[user].count = 0;
    }
  };
}

function sendEmail(email){
  app.mailer.send('email', {
    to: email, // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Test Email', // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      console.log('There was an error sending the email');
      return;
    }
    console.log('Email Sent');
  });
};

// Multi-process to utilize all CPU cores.
// if (cluster.isMaster) {
//   console.error(`Node cluster master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
//   });

// } else {
  // const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  // app.get('*', function(request, response) {
  //   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  // });

  app.get("/:id", (req, res) => {
    res.render("../react-ui/build/index.html");
    activeusers[req.params.id].count = 0;
    res.redirect("http://localhost:3000");
  });

// app.get("/login/:id", (req, res) => {
//   activeusers[req.params.id] = {count : 0}
//   res.redirect("http://localhost:8080");
// });

// app.get("/logout/:id", (req, res) => {
//   delete activeusers[req.params.id];
//   res.redirect("http://localhost:8080");
// });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
// }
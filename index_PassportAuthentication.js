const express = require("express");
const CreateUser = require("./Controller/Users.js")
const cors = require('cors');
const bodyParser = require('body-parser');



// required passport type data 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const mongoose = require("mongoose")




const app = express();

const ConnectionStr = require("./Database/connection.js")

const PORT = process.env.PORT || 3000;


// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure express-session middleware
app.use(session({
    secret: 'israr1122',
    resave: false,
    saveUninitialized: false
}));



app.get('/', (req, res) => {
//    console.log("Request Variables : ",req)
    res.send('Hello World!');

});

app.post('/CreateUser', CreateUser);


// passport test data 

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Example user data (in-memory for demonstration purposes)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
  ];

 // Configure local strategy for Passport
passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return done(null, false, { message: 'Incorrect username or password' });
    }
    return done(null, user);
  }));
  
  
  // Serialize and deserialize user
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});


// Login route
app.post('/login',  (req, res) => {
  //console.log(req.isAuthenticated)
  res.send({'data':"Data is recieved !"});
});
// Login route
// app.post('/login', passport.authenticate('local'), (req, res) => {
//     //console.log(req.isAuthenticated)
//     res.send('Successfully logged in');
// });

// Test endpoint
app.get('/test', IsvalidUser,(req, res) => {
   
  });

// Logout route
app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        // Handle error, if any
        console.error('Error occurred during logout:', err);
        return res.status(500).send('Error occurred during logout');
      }
      res.send('Successfully logged out');
    });
  });


  function IsvalidUser(req,res,next)
  {
    if (req.isAuthenticated()) {
        
        // User is logged in
        res.send('You are logged in!');
      } else {
        // User is not logged in
        res.send('Please log in first!');
      }
      next()
  }



  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
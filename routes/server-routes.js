var express = require('express'),
    passport = require('passport'),
    router = express.Router();

// Define register get route
router.route('/register')
  .get(function(request, response) {
    response.render('register');
  }) // Next register and authenticate post requests for login
  .post(function(request, response, next) {
    passport.authenticate('registerUser', function(err, user, info){
      if (err) {
        return response.send({ err: err, info: info });
      } // If successful - send to dashboard page
      return response.redirect('/dashboard');
    })(request, response, next);
  });

// Define login get route
router.route('/')
  .get(function(request, response) {
    response.render('index');
  }) // Next authenicate post requests for login
  .post(function(request, response, next) {
    passport.authenticate('loginStrategy', function(err, user, info){
      if (err) {
        return response.send({ err: err });
      } // If not the right credentials, send back to index
      if (!user) {
        return response.redirect('/');
      }
      request.login(user, function(err) {
        if(err) {
          return response.redirect('/');
        } // If correct login credentials, send to dashboard page
        return response.redirect('/dashboard');
      });
    })(request, response, next);
  });

// Define dashboard route
router.get('/dashboard', function(request, response) {
  // If not logged in/authenticated send back to index otherwise send to correct path
  if (!request.user) {
    response.redirect('/');
    return;
  }
  response.render('dashboard');
});

// Define test route
router.route('/test').get(function(request, response) {
  // If not logged in/authenticated send back to index otherwise send to correct path
  if (!request.user) {
    response.redirect('/');
    return;
  }
  response.render('test');
});

// Define chat route
router.get('/chat', function(request, response) {
  // If not logged in/authenticated send back to index otherwise send to correct path
  if (!request.user) {
    response.redirect('/');
    return;
  }
  response.render('chat');
});


// Define logout route which is a virtual path - just a passport logout method
router.get('/logout', function(request, response) {
  request.logout();
  response.redirect('/');
});

module.exports = router;

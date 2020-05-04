const express = require('express')
 router = express.Router(),
 { User } = require('../../models'),
 { passport } = require('../../passport');


router.post('/register', (req, res) => {

    const { email, password } = req.body
    
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.json({error: `Something strange went down: ${err}`})
        } else if (user) {
            res.json({
                error: `Sorry, but that email: ${email} is already in use`
            })
        }
        else {
            const newUser = new User({
                 email,
                 password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login', function(req, res, next) {
        console.log(`Route for user login hit: ${req.body}`);
        next()
    },
    passport.authenticate('local'),
    (req, res, err) => {
        console.log(`logged in as, ${err}`);
        if(req.user._id) {
        const userInfo = {
            status: 'success',
            email: req.user.email
        }
        res.send(userInfo);
      } else {
        res.send({status: 'failure'})
      }
    }
)

router.get('/', (req, res, next) => {

    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})


router.get('/authenticate', (req, res) => {
    console.log(req.data)
    const options = {
      httpOnly: true,
      signed: true,
    };
  
    console.log(req);
  
    if (req.auth.user === 'admin') {
      res.cookie('name', 'admin', options).send({ screen: 'admin' });
    } else if (req.auth.user === 'user') {
      res.cookie('name', 'user', options).send({ screen: 'user' });
    }
  });
  
  router.get('/read-cookie', (req, res) => {
    console.log(req.signedCookies);
    if (req.signedCookies.name === 'admin') {
      res.send({ screen: 'admin' });
    } else if (req.signedCookies.name === 'user') {
      res.send({ screen: 'user' });
    } else {
      res.send({ screen: 'auth' });
    }
  });
  
  router.get('/clear-cookie', (req, res) => {
    res.clearCookie('name').end();
  });
  
  router.get('/get-data', (req, res) => {
    if (req.signedCookies.name === 'admin') {
      res.send('This is admin panel');
    } else if (req.signedCookies.name === 'user') {
      res.send('This is user data');
    } else {
      res.end();
    }
  });


module.exports = router
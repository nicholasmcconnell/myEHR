const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User')
const jwtStrategy = require('passport-jwt').Strategy;


const cookieExtractor = req => {
    let token = null;
    if(req && req.cookies) {
        token = req.cookies['access_token']
    } else {
        return token;
    }
}

//Used for authorization
passport.use(new jwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'nick'
}, (payload, done) => {
    User.findById({_id:  payload.sub}, (err, user) => {
        if (err) {
            return done(err, false);
        }

        if(user) {
            return done(null, user);
        } else {
            return (null, false);
        }
    })
}))
//used for authenticatin using username and password
passport.use(new LocalStrategy((username, password, done) => {  
     User.findOne({username}, (err, user) => {
         //something went wrong witht he database
         if(err){
             return done(err);
         }
         // if No user exists
         if(!user){
             return done(null, false);
         }
         // check if password is correct
         user.comparePassword(password, done);
      })
}))
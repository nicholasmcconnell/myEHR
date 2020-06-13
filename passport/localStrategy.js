    const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,

    { User } = require('../models'),

 strategy = new LocalStrategy(
	{
		usernameField: 'email' 
	},
	   (email, password, done) => {
		User.findOne({ email }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Email address not found!' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

// Serializes/deserialize users on login and saves their id to the browser's session storage.
passport.serializeUser((user, done) => done(null, { _id: user._id }))

passport.deserializeUser((id, done) => {

	User.findOne(
		{ _id: id },
	
		(err, email) => done(null, email)
	)
})

passport.use(strategy)

module.exports = passport;
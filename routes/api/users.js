const express = require('express');
    (router = express.Router()), 
    ({ User } = require('../../models')), 
    ({ passport } = require('../../passport'));

    
router.post('/register', (req, res) => {
	const { email, password } = req.body;

	User.findOne({ email }, (err, user) => {
		if (err) {
			res.json({ error: `Something strange went down: ${err}` });
		} else if (user) {
			res.json({
				error: `Sorry, but that email: ${email} is already in use`
			});
		} else {
			const newUser = new User({
				email,
				password
			});
			newUser.save((err, savedUser) => {
				if (err) return res.json(err);
				res.json(savedUser);
			});
		}
	});
});

router.post('/login', (req, res, next) => {
		console.log(`Route for user login hit: ${req.body}`);
		next();
	},
	passport.authenticate('local'),
	(req, res, err) => {
		console.log(`logged in as ${req.user.email}`);
		if (req.user._id) {
			const userInfo = {
				status: 'success',
				email: req.user.email
			};
			res.send(userInfo);
		} else {
			res.send({ status: 'failure' });
		}
	}
);

router.get('/', (req, res) => {
	if (req.user) {
		res.json({ user: req.user });
	} else {
		res.json({ user: null });
	}
});

module.exports = router;

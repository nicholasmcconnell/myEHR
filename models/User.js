const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    

 { Schema } = mongoose,


 UserSchema = new Schema ({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Schema methods.
UserSchema.methods = {
	checkPassword: function (typedPassword) {
		return bcrypt.compareSync(typedPassword, this.password)
	},
	hashPassword: encryptMePassword => {
		return bcrypt.hashSync(encryptMePassword, 10)
	}
}

// Hook for hashing passwords.
UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('Uhh.. We kinda need a password for this to work')
		next()
	} else {	
		this.password = this.hashPassword(this.password)
		next()
	}
})
const User = mongoose.model("users", UserSchema);
module.exports = User;

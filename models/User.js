const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
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
})


module.exports = User = mongoose.model("users", UserSchema);








// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         min: 6,
//         max: 15
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     role: {
//         type: String,
//         enum: [
//             "user",
//             "admin"
//         ],
//         required: true
//     },
//     todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
// });

// UserSchema.pre('save', function (next) {
//     if (!this.isModified('password')){
        
//         return next();
//     }

//     bcrypt.hash(this.password, 10, (err, passwordHASH) => {
//         if (err){

//             return next(err);
//         } else {
//             this.password = passwordHASH;
//             next();
//         }
//     })
// });

// UserSchema.methods.comparePassword = function (password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if (err)
//             return cb(err);
//         else {
//             if (!isMatch)
//                 return cb(null, isMatch);

//             return cb(null, this);
//         }
//     })
// }

// module.exports = mongoose.model('User', UserSchema);

const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    console.log("in register.js")
    let errors = {};

    //convert empty fields to an empty string so we can use validator functions
    // data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //Name checks
    // if (Validator.isEmpty(data.name)) {
    //     errors.name = "Name fields is required";
    // }

    //Email Checks
    if (Validator.isEmpty(data.email)) {
        errors.name = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "email is invalid";
    }

    //Password Checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    // if (Validator.isEmpty(data.password2)) {
    //     errors.password2 = "Confirm password field is required";
    // }

    if(!Validator.isLength(data.password, { min: 6, max: 30 })){
        errors.password = 'Password must be at least 6 Characters';
    }

    // if(!Validator.equals(data.password, data.password2)) {
    //     errors.password2 = 'Password must match';
    // }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
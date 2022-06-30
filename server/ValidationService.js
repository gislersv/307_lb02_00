// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    console.log(userObj);
    // Check required fields
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("age", userObj.age);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("reason", userObj.reason);
    if (result.isNotValid) { return result; }


    //check length
    result = validateLib.checkLength("name",userObj.name, 3, 15);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}

"use strict";
//const bcrypt = require('bcrypt');

class UserController {
  static async login(_username, fullName_, screenName_, password, _email) {
    const username = _username.trim();
    const fullName = capitalizeAll(fullName_.trim());
    const screenName = screenName_.trim();
    const email = (_email && _email.trim().length > 0) ? _email.trim() : null;

    if (username == "")
      return {error: "no_username"};
    
    if (password === "")
      return {error: "no_password"};
     
    let userId; 

    // Everything is OK.
    return {userId: userId};
  }
   
  static _validateUsername(username) {
    // check if the username is a valid
    return username.length <= 255 ? username.toLowerCase() : false;
  }

  static _formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  static _validateFullName(fullName) {
    if (!fullName || fullName.length > 255) {
      return false;
    }
    return this._formatName(fullName);
  }

  static _validateScreenName(screenName) {
    if (!screenName || screenName.length > 255) {
      return false;
    }
    return this._formatName(screenName);
  }

  static _validateLoginAttempts(loginAttempts) {
    const loginAttemptsNumber = +loginAttempts;
    if (Number.isInteger(loginAttemptsNumber) && loginAttemptsNumber >= 0 && loginAttemptsNumber <= 10) {
      return loginAttemptsNumber;
    }
    return false;
  }

  static _validatePassword(password) {
    // Minimum 6 characters, at least one letter and one number
    // source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return re.test(password) ? password : false;
  }

  static async _createUsers(userList) {
    try {
      const usernameSet = new Set();
      for (const user of userList) {
        const rawUser = user[0];
        if (user.length < 5) {
          throw new Error("Too few entries in the row. Either the username, full name, screen name or password are missing.", rawUser);
        }
        // todo
        const username = this._validateUsername(rawUser);
        const fullName = this._validateFullName(user[1]);
        const screenName = this._validateScreenName(user[2]);
        const password = this._validatePassword(user[3]);
        if (!username) {
            throw new Error("Invalid username. Make sure the username is a valid email shorter than 255 characters.", rawUser);
          
        }
        if (password === false) {
            throw new Error("Invalid password. Make sure the password has minimum 6 characters, at least one letter, one number and no special characters.", rawUser);
          
        }
        if (fullName === false) {
            throw new Error("Invalid name. Make sure the name is between 0 and 255 characters.", rawUser);
          
        }
        if (screenName === false) {
            throw new Error("Invalid screen name. Make sure the screen name is between 0 and 255 characters.", rawUser);
        }
        //const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
        if (usernameSet.has(username)) {
            throw new Error("Duplicate username.", rawUser);
        }
          
        usernameSet.add(username);

        //todo: decide on how to set the user id
        let userId;
        
      return {error: null};
    } }

    catch (error) {
      if (error) {
          console.log(error);
            return {error: "malformed_user_list"};
      }
      throw error;
    }
  }

  static async updateUser(id, userData) {
      //todo: to update any details of a particular user
  }

}

module.exports = UserController;

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} =require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
 .get(userController.renderSignupForm)
 .post(wrapAsync(userController.signup)
);

router.route("/login")
 .get(userController.renderLoginForm)
 .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: '/login', 
      failureFlash: true
    }), 
    userController.login
);

//passport.autheticate() is a autheticate middleware that user is already singup or not
//failure redirect mtlb if autheticate fail hua to user ko /login pe redirect krwado or failure flash mtlb flash msg krwana

router.get("/logout", userController.logout);

module.exports = router;




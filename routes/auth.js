// const express = require('express');
// const { register, login, forgotpassword, resetpassword } = require('../controllers/auth');
// const router = express.Router();

// router.route("/register").post(register);

// router.route("/login").post(login);

// router.route("/forgotpassword").post(forgotpassword);

// router.route("/resetpassword/:resetToken").put(resetpassword);





// module.exports = router;


const express = require("express");
const router = express.Router();


const {
  login,
  register,
  forgotpassword,
  resetPassword
//   resetPassword,
} = require('../controllers/auth');

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

 router.route("/resetpassword/:resetToken").put(resetPassword);

module.exports = router;
const express = require('express')

const router = express.Router()

const User = require("../models/userModel")

const {LoginUser, RegUser} = require("../controllers/userController")

router.post("/login", LoginUser)

router.post("/signup", RegUser)

module.exports = router
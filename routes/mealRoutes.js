const express = require("express")

const router = express.Router()

const Meal = require("../models/mealModel")

const {createMeal, getMeals, addLog, getLogs} = require("../controllers/mealController")
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)

router.post("/createMeal", createMeal)

router.get("/getMeals", getMeals)

router.post("/addLog", addLog)

router.get("/getLogs", getLogs)

module.exports = router
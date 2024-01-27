require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const UserRoutes = require("../routes/UserRoutes")
const MealRoutes = require("../routes/mealRoutes")

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors({
	origin: "*",
}))

app.use("/api/user", UserRoutes)
app.use("/api/meal", MealRoutes)

mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('connected to mongo and listening on port ', process.env.PORT)
		})
	}).catch((error) => {
		console.log(error)
	})
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const mealSchema = new Schema({
	meal_id: {
		type: Number,
		required: true,
		unique: true,
	},
	meal_name: {
		type: String,
		required: true,
		unique: true,
	},
	calories: {
		type: Number,
		required: true,
		unique: false,
	},
	carbs: {
		type: Number,
		required: true,
		unique: false,
	},
	prots: {
		type: Number,
		required: true,
		unique: false,
	},
	fats: {
		type: Number,
		required: true,
		unique: false,
	},


})

module.exports = mongoose.model("Meal", mealSchema)
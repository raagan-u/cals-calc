const mongoose = require("mongoose")
const Meal = require("./mealModel")

const Schema = mongoose.Schema


const logSchema = new Schema({
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
	datetime: {
		type: String,
		default: () => moment().format('YYYY-MM-DDTHH:mm'),
	},
})

module.exports = mongoose.model("Log", logSchema, "log")
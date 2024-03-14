const mongoose = require("mongoose")

const Schema = mongoose.Schema


const logSchema = new Schema({
	meal_id: {
		type: Number,
		required: true,
		unique: false,
	},
	meal_name: {
		type: String,
		required: true,
		unique: false,
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
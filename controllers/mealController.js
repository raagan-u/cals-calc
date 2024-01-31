const Meal = require("../models/mealModel")
const Log = require("../models/logModel")
const { default: mongoose } = require("mongoose")

const createMeal = async function (req, res) {
	const document = req.body
  try {
    const check = (await Meal.find({"meal_id": document.meal_id})).length
	console.log("check value ", check)
    if(check === 0) {
      const check2 = (await Meal.find({"meal_name": document.meal_name})).length;
	  console.log("check2 value ", check2)
      if( check2 === 0 ) {
        const result = await Meal.create(document)
        res.status(200).json({ success: true, insertedId: result.insertedId, message: "meal added!"});
      } else {
        res.send({ success: false, message: "meal already exists!!"});
      }
    } else {
      res.send({ success: false, message: "meal_id already taken"});
    }

  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }
}
const getMeals = async function(req, res) {
	const meals = await Meal.find()
	res.send(JSON.stringify(meals))
}
const addLog = async function (req,res) {
	const document = req.body;
	const customId = new mongoose.Types.ObjectId();
	document["_id"] = customId
  	console.log(document);
	try {
		const result = await Log.create(document);
		res.send({ success: true, message: "meal logged!" });
	} catch (err) {
		console.error('Error creating document:', err);
		res.status(500).send({ success: false, error: err.message });
	}
}
const getLogs = async function (req,res) {
	const logs = await Log.find()
	res.json(logs)
}

module.exports = {createMeal, getMeals, addLog, getLogs}
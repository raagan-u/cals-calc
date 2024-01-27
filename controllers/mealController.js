const Meal = require("../models/mealModel")
const Log = require("../models/logModel")

const createMeal = () => {
	/*const db = client.db('cals-calc');
  const collection = db.collection('meals');
  const document = req.body;
  //console.log(document);
  try {
    const check = await collection.countDocuments({"meal_id": document.meal_id})
    if(check === 0) {
      const check2 = await collection.countDocuments({"meal_name": document.meal_name});
      if( check2 === 0 ) {
        const result = await collection.insertOne(document);
        res.send({ success: true, insertedId: result.insertedId, message: "meal added!"});
      } else {
        res.send({ success: false, message: "meal already exists!!"});
      }
    } else {
      res.send({ success: false, message: "meal_id already taken"});
    }
  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }*/
	res.json({msg: "created"})
}
const getMeals = async function(req, res) {
	const meals = await Meal.find()
	res.send(JSON.stringify(meals))
}
const addLog = () => {
	/*const db = client.db('cals-calc');
  const collection = db.collection('log');
  const document = req.body;
  document["_id"] = new ObjectId();
  console.log(document);
  try {
    const result = await collection.insertOne(document);
    res.send({ success: true, insertedId: result.insertedId, message: "meal added!" });
  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }*/
	res.json({msg: "created"})
}
const getLogs = async function (req,res) {
	const logs = await Log.find()
	res.json(logs)
}

module.exports = {createMeal, getMeals, addLog, getLogs}
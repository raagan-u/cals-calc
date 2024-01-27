import React from "react";
import { useState } from "react";

const Meal = ({ onAdd }) => {
	const [meal_id, setMI] = useState(0);
	const [meal_name, setName] = useState('');
	const [calories, setCals] = useState(0);
	const [carbs, setCarbs] = useState(0);
	const [prots, setProt] = useState(0);
	const [fats, setFat] = useState(0);
	
	const onSubmit = (e) => {
		e.preventDefault();
		onAdd({ meal_id, meal_name, calories, carbs, prots, fats })
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='number' placeholder="MEAL ID" className="fctl" onChange={(e) => setMI(e.target.value)}  /><br />
				<input type='text' placeholder="MEAL NAME" className="fctl" onChange={(e) => setName(e.target.value)} /><br />
				<input step='0.1' type='number' placeholder="CALORIES" className="fctl-macros" onChange={(e) => setCals(e.target.value)} />
				<input step='0.1' type='number' placeholder="PROTEINS" className="fctl-macros" onChange={(e) => setProt(e.target.value)} />
				<input step='0.1' type='number' placeholder="CARBS" className="fctl-macros" onChange={(e) => setCarbs(e.target.value)} />
				<input step='0.1' type='number' placeholder="FATS" className="fctl-macros" onChange={(e) => setFat(e.target.value)} /><br />
				<input type='submit' value='ADD MEAL' className="fctl-btn" />
			</form>
		</div>
	)
}

export default Meal
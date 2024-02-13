import axios from "axios";
import { useEffect, useState } from "react";
const Home =  () => {
	const [arr, setArr] = useState([]);
	useEffect(()=> {
		var cals=0,carbs=0,prots=0,fats=0;
		axios.get("http://localhost:3500/api/meal/getLogs").then(
			resp => {
				resp.data.map( (item, index) => {
					cals += parseFloat(item.calories);
					carbs += parseFloat(item.carbs);
					prots += parseFloat(item.prots);
					fats += parseFloat(item.fats);
				})
				setArr([cals, carbs, prots, fats]);
			}
		)
	}, []);
	

	return (
		<div>
			<div className="cards">
				<div className="card">
					<h2>MY CURRENT MACROS</h2><br/>
					<p>
					<label>CALORIES : {arr[0]}</label><br/>
					<label>CARBS :  {arr[1]}</label><br/>
					<label>PROTEINS : {arr[2]}</label><br/>
					<label>FATS : {arr[3]}</label>
					</p>
				</div>
				<div className="card">
					<h2>BODY WEIGHT</h2>
					<p>
					<label>CURRENT WEIGHT :  85.2</label><br/>
					<label>BMI :  26</label><br/>
					<label>BFP: 26.5%</label>
					<label>Last Updated: 01-01-2024</label>
					</p>
				</div>
				<div className="card">
					<h2>PERSONAL RECORDS</h2>
					<p>
					<label>BENCH : 60</label><br/>
					<label>SHOULDER PRESS :  40</label><br/>
					<label>DEADLIFT : 130</label><br/>
					<label>SQUAT : 100</label>
					</p>
				</div>
			</div>
			<div className="hztl-card">
				<h2>PROGRESS</h2>
				<p>A SIMPLE GRAPH</p>
			</div>
		</div>
		
	)
}

export default Home;
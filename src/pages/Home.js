import axios from "axios";
import { useEffect, useState } from "react";
const Home =  () => {
	const [arr, setArr] = useState([]);
	useEffect(()=> {
		var cals=0,carbs=0,prots=0,fats=0;
		axios.get("http://localhost:3500/api/log").then(
			resp => {
				resp.data.map( (item, index) => {
					cals += parseFloat(item.cals);
					carbs += parseFloat(item.carbs);
					prots += parseFloat(item.prot);
					fats += parseFloat(item.fats);
				})
				setArr([cals, carbs, prots, fats]);
			}
		)
	}, []);
	

	return (
		<div>
			<h1>MY CURRENT MACROS</h1><br/>
			<label>CALORIES : {arr[0]}</label><br/>
			<label>CARBS :  {arr[1]}</label><br/>
			<label>PROTEINS : {arr[2]}</label><br/>
			<label>FATS : {arr[3]}</label>
		</div>
	)
}

export default Home;
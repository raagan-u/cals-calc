import { useAuthContext } from "../hooks/useAuthContext";
import { useMealsContext } from "../hooks/useMealContext"
import MealDetails from "../components/MealDetails";
import UploadMeal from "../components/UploadMeal";
import axios from "axios";


const DispMeal = () => {
	const { user } = useAuthContext();
	const { meals, dispatch } = useMealsContext();
	const url = "http://localhost:3500/api/meal/createMeal"
	if(!user) return
	async function AddMeal  (meal) {
		if(!user) return
		
		
		const result = await axios.post(url, meal, {headers: {
			"Authorization": `Bearer ${user.token}`
		}});
			
		if (result.status === 200) {
			if (result.success === true)
				dispatch({type: "CREATE_MEAL", payload: meal})
		}
		fetchMeals()
		alert(result.data.message)
	}
	const fetchMeals = () => {
		axios.get("http://localhost:3500/api/meal/getMeals", {
				headers: { Authorization: `Bearer ${user.token}` }
			}).then(
				resp => {
					dispatch({type: "SET_MEALS", payload: resp.data})				
				}
			)
	}

	const ExecuteFunc = () => {
		if(meals) {
			return(
				<div className="upload">
					<table>
						<thead><title>MEALS</title></thead>
						<tbody>
							<tr>
								<th>Meal ID</th>
								<th>Meal Name</th>
								<th>Calories</th>
								<th>Carbs</th>
								<th>Proteins</th>
								<th>Fats</th>
							</tr>
							
							{meals && meals.map((item,index)=> (
								<tr>
								<td style={{color: "wheat"}}>{item.meal_id}</td>
								<td style={{color: "wheat"}}>{item.meal_name}</td>
								<td style={{color: "wheat"}}>{item.calories}</td>
								<td style={{color: "wheat"}}>{item.carbs}</td>
								<td style={{color: "wheat"}}>{item.prots}</td>
								<td style={{color: "wheat"}}>{item.fats}</td>
								
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)
		}
	}

	return (
		<div className="wrapper">
			<div className="upload">
			<UploadMeal onAdd={AddMeal} /><br />
			</div>
			<div className="details">
			{user && ExecuteFunc()}
			</div>
		</div>
	)
}

export default DispMeal;
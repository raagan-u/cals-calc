import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useMealsContext } from "../hooks/useMealContext"
import MealDetails from "./MealDetails";
const DispMeal = () => {
	const { user } = useAuthContext();
	const { meals, dispatch } = useMealsContext();
	useEffect(()=> {}, [])
	const ExecuteFunc = () => {
		if(meals) {
			return(
				<div>
					{meals && meals.map((item,index)=> (
						<MealDetails key={item._id} meal={item} />
					))}
				</div>
			)
		}
	}

	return (
		<div>
			{user && ExecuteFunc()}
		</div>
	)
}

export default DispMeal;
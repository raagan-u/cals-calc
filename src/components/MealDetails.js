const MealDetails = ({meal}) => {
	return (
		<div className="meal-details">
				<tr> 
					<td>{meal.meal_id}</td>
					<td>{meal.meal_name}</td>
					<td>{meal.calories}</td>
					<td>{meal.carbs}</td>
					<td>{meal.prot}</td>
					<td>{meal.fats}</td>
				</tr>
		</div>
	)
}

export default MealDetails;
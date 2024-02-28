const MealDetails = ({meal}) => {
	console.log("SAFD")
	console.log(meal.name)
	return (
		<div className="meal-details">
			<table border='1'>
				<tbody>
				<tr> 
					<td>{meal.meal_id}</td>
					<td>{meal.meal_name}</td>
					<td>{meal.calories}</td>
					<td>{meal.carbs}</td>
					<td>{meal.prot}</td>
					<td>{meal.fats}</td>
				</tr>
				</tbody>
			</table>
		</div>
	)
}

export default MealDetails;
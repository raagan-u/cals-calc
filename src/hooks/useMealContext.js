import { MealsContext } from "../context/mealContext";
import { useContext } from "react";

export const useMealsContext = () => {
	const context = useContext(MealsContext)

	if (!context) {
		throw Error("useMealsContext must be used only inside an MealsContextProvider")
	}

	return context
}
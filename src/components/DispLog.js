import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import LogDetails  from "./LogDetails"
import { useState } from "react";
const DispLog = () => {
	const { user } = useAuthContext()
	const [logs, setLogs] = useState([])
	if(!user) return
	
	axios.get("http://localhost:3500/api/meal/getLogs", { headers : {
		Authorization: `Bearer ${user.token}`
	}}).then((resp) => {
		setLogs(resp.data)
	})

	return(
		<div>
			{logs && logs.map((item,index)=> (
						<LogDetails key={item._id} meal={item} />
					))}
		</div>
	)
}

export default DispLog
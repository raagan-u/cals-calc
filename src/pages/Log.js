import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";
import LogDetails from "../components/LogDetails"
import UploadLog from "../components/UploadLog";
import { useState, useEffect } from "react";
import Popup from "../components/Popup";
import "../assets/log.css"
import { Link } from "react-router-dom";

const Log = () => {
    const { user } = useAuthContext();
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [btnPopup, setBtnPopup] = useState(false)
	const fetchLogs = () => {
		axios.get("http://localhost:3500/api/meal/getLogs", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        .then((resp) => {
            setLogs(resp.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
	}

    useEffect(() => {
        if (!user) return;
		if (user) fetchLogs();
        
    }, [user]);

    if (!user) {
        return null;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="wrapper">
            <div className="upload">
			    <UploadLog onAdded={fetchLogs} />
                <div className="btn-cont">
                    <button onClick={() => {setBtnPopup(true)}}>LOGS</button><br />
                    <Link to="/meal"><button>Meals</button></Link>
                </div>
            </div>
            
            <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
                <div className="details">
					<table border="3">
						<thead><title>MEALS</title></thead>
						<tbody>
							<tr>
                                <th>Datetime</th>
								<th>Meal ID</th>
								<th>Meal Name</th>
								<th>Calories</th>
								<th>Carbs</th>
								<th>Proteins</th>
								<th>Fats</th>
							</tr>
							
							{logs && logs.map((item,index)=> (
								<tr>
                                <td style={{color: "wheat"}}>{item.datetime}</td>
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
            </Popup>
        </div>
    );
};

export default Log;

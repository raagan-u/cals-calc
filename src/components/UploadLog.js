import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useMealsContext } from "../hooks/useMealContext";

const UploadLog = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [datetime, setDatetime] = useState("");
  const [validationError, setValidationError] = useState("");
  const { user } = useAuthContext();
  const { meals, dispatch} = useMealsContext();

  useEffect(() => {
    if(!user || !meals) return
      let teamsFromApi = meals.map(team => ({
        value: JSON.stringify(team),
        display: team.meal_name
      }));
      setTeams([
        { value: "", display: "(Select your Meal)" },
        ...teamsFromApi
      ]);
  }, [user]);

  const onSubmit = (e) => {
    if(!user) return
    e.preventDefault();
    if (!selectedTeam || !datetime) {
      setValidationError("Please select a meal and enter a datetime.");
      return;
    }

    const mealData = {
      ...JSON.parse(selectedTeam),
      datetime: datetime
    };

    axios.post("http://localhost:3500/api/meal/addLog", mealData, {
      headers: { Authorization: `Bearer ${user.token}` }
    })
    .then(resp => {
      window.alert(resp.data.message);
      window.location.reload(true);
    })
    .catch(error => {
      console.error("Error logging meal:", error);
      setValidationError("An error occurred while logging the meal.");
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="datetime-local" onChange={e => setDatetime(e.target.value)} /><br />
        <select
          value={selectedTeam}
          onChange={e => {
            setSelectedTeam(e.target.value);
            setValidationError(e.target.value === "" ? "You must select your meal" : "");
          }}
        >
          {teams.map(team => (
            <option
              key={team.value}
              value={team.value}
            >
              {team.display}
            </option>
          ))}
        </select>
        <div style={{ color: "red", marginTop: "5px" }}>
          {validationError}
        </div>
        <input type="submit" value="LOG IT" />
      </form>
    </div>
  );
};

export default UploadLog;

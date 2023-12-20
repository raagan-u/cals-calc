import React, {Component} from "react";
import Moment from "react-moment";
import axios from "axios";
class UploadLog extends Component {
	state = {
	  teams: [],
	  selectedTeam: "",
	  datetime: "",
	  validationError: ""
	};
  
	componentDidMount() {
		axios.get(
			"http://localhost:3500/api/documents"
		)
		.then(resp => {
			let teamsFromApi = resp.data.map(team => {
				return ({ value: JSON.stringify(team) , display: team.meal_name})
			});
			this.setState({
				teams: [
			  	{
					value: "",
					display: "(Select your Meal)"
			  	}
				].concat(teamsFromApi)
		  	});
		})
		.catch(error => {
			console.log(error);
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.varr1 = JSON.parse(this.state.selectedTeam);
		this.varr1["datetime"] = this.state.datetime;
		axios.post("http://localhost:3500/api/log", this.varr1).then(
			resp => {
				window.alert(resp.data.message);
				window.location.reload(true);
			}
		)
	}
  
	render() {
	  return (
		<div>
		<form onSubmit={this.onSubmit}>
			<input type="datetime-local" onChange={e => this.setState({datetime: e.target.value})} /><br />
		  <select
			value={this.state.selectedTeam.data}
			onChange={e =>
			  this.setState({
				selectedTeam: e.target.value,
				validationError:
				  e.target.value === ""
					? "You must select your meal"
					: ""
			  })
			}
		  >
			{this.state.teams.map(team => (
			  <option
				key={team.value}
				value={team.value}
			  >
				{team.display}
			  </option>
			))}
		  </select>
		  <div
			style={{
			  color: "red",
			  marginTop: "5px"
			}}
		  >
			{this.state.validationError}
		  </div>
		  <input type="submit" value="LOG IT" />
		  </form>
		</div>
	  );
	}
  }
  
export default UploadLog;
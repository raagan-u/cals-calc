import React, { Component } from 'react';
import axios from 'axios';

class DispLog extends Component {
  constructor() {
    super();
    this.state = {
      data: [] 
    };
  }

  
  
  componentDidMount() {
    axios.get('http://localhost:3500/api/log').then((resp)=> {
	  this.setState({ data: resp.data });
	})
  }

  renderTableData() {
    return this.state.data.map((item) => {
      const { _id, datetime, meal_id, meal_name, cals, carbs, prot,fats } = item;
      return (
        <tr key={_id}>
			<td>{datetime}</td>
          <td>{meal_id}</td>
          <td>{meal_name}</td>
          <td>{cals}</td>
		      <td>{carbs}</td>
		      <td>{prot}</td>
		      <td>{fats}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>LOG HISTORY</h1>
        <table align='center'>
          <thead>
            <tr>
				<th>Datetime</th>
            	<th>Meal ID</th>
            	<th>Meal Name</th>
            	<th>Calories</th>
				      <th>Carbs</th>
				      <th>Proteins</th>
				      <th>Fats</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );

    
    }
}

export default DispLog;
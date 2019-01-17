import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class AddPOIForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: 0,
        name: '',
        descripton: '',
        cost: '',
        place: '',
        toDashboard: false
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    let poiObject = {

      "destinationId": parseInt(this.state.place),
      "name": this.state.name,
      "description": this.state.descripton,
      "cost": parseFloat(this.state.cost),
      "review": ""
      }

      console.log(poiObject)

    fetch("http://localhost:5002/pointsofinterest?_expand=destination", {
        method: `POST`, // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        // referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(poiObject), // body data type must match "Content-Type" header
    }).then(() => this.setState(() => ({
      toDashboard: true
    })))


    event.preventDefault();
  }

  render () {
    if (this.state.toDashboard === true) {
      return <Redirect to="/"/>
    } else {
    return (

        <form className="addpoi" onSubmit={this.handleSubmit}  >
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Description:
            <input type="text" name="descripton" value={this.state.description} onChange={this.handleInputChange} />
          </label>
          <label>
            Cost:
            <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
          </label>
          <select name="place" value={this.state.place} onChange={this.handleInputChange}>
            <option defaultValue=""></option>
            <option value="1">Athens</option>
            <option value="2">Florence</option>
            <option value="3">Madrid</option>
          </select>
          <input type="submit" />
        </form>

      );
  }
  }
}
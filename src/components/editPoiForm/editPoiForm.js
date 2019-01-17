import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class EditPOIForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

          id: this.props.location.state.id,
          name: this.props.location.state.name,
          description: this.props.location.state.description,
          cost: this.props.location.state.cost,
          destinationId: this.props.location.state.destinationId,
          review: this.props.location.state.review,
          place: this.props.location.state.place,
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
        "id": parseInt(this.state.id),
        "destinationId": parseInt(this.state.destinationId),
        "name": this.state.name,
        "description": this.state.description,
        "cost": parseFloat(this.state.cost),
        "review": this.state.review
        }

        console.log(poiObject)
    let putId = parseInt(this.state.id)
    fetch(`http://localhost:5002/pointsofinterest/${putId}?_expand=destination`, {
        method: `PUT`, // *GET, POST, PUT, DELETE, etc.
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
            return <Redirect to={{
                pathname: "/",
                state: {from: this.props.location }
              }}/>
        } else {
            return (

                <form className="editpoi" onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <p type="text" name="name" >{this.state.name}</p>
                </label>
                <label>
                    Description:
                    <p type="text" name="descripton">{this.state.description}</p>
                </label>
                <label>
                    Cost:
                    <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange} />
                </label>
                <label>
                    Review:
                    <input type="text" name="review" value={this.state.review} onChange={this.handleInputChange} />
                </label>
                <label>
                    Place:
                    <p type="text" name="place">{this.state.place}</p>
                </label>
                <input type="submit" />
                </form>

            );
        }
    }
}
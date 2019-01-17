import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class PointsOfInterest extends Component {

    constructor() {
        super();

        this.state = {

            pointsofinterest: [],
            id: ""

        }
    }

    componentDidMount () {

        fetch("http://localhost:5002/pointsofinterest?_expand=destination")
        .then(r => r.json())
        .then(pointsofinterest => {this.setState({pointsofinterest: pointsofinterest})})

    }
    render() {

        return (
            <section className="pointsofinterest">
            <Link to="addpoi"><button className="addPoiButton">Add Point of Interest</button></Link>
            {

                this.state.pointsofinterest.map(poi =>

                    <div className={`poiDiv_${poi.id}`} id="poiDiv" key={poi.id} >
                        <p>{`Name: `}{poi.name}</p>
                        <p>{`Description: `}{poi.description}</p>
                        <p>{`Cost: `}{poi.cost}</p>
                        <p>{`Review: `}{poi.review}</p>
                        <p>{`Place:`}{poi.destination.name}</p>
                        <Link to={{pathname:"/editpoi", state:{id: poi.id, name: poi.name, description: poi.description, cost: poi.cost, review: poi.review, destinationId: poi.destination.id, place: poi.destination.name}}}> <button id={poi.id} className="poiEditButton">
                            Edit
                        </button></Link>
                    </div>
                )
            }
            </section>
        );
    }
}
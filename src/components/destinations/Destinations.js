import React, { Component } from 'react'


export default class Destinations extends Component {

    render() {

        return (
            <section className="destinations">
            {
                this.props.destinations.map(destination =>
                    <div className="destination" key={destination.id}>
                        {`Name:`} {destination.name} <br/>
                        {`Points of Interest:`}

                        {destination.pointsofinterest.map(poi =>
                            <div className="pointsofinterest" >
                            {`Name:`} {poi.name} <br/>
                            {`Description:`} {poi.description} <br/>
                            {`Cost:`} {poi.cost} <br/>
                            {`Review:`} {poi.review} <br/>
                            </div>
                        )}
                    </div>
                )
            }
            </section>
        );
    }
}
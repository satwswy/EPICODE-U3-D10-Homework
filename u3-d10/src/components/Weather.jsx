import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Weather extends Component {

    
    render() {
        return (
            <>
                <div>
                {this.props.weather.main && 
                <ListGroup>
                <ListGroup.Item>Feels Like : {this.props.weather.main.feels_like}</ListGroup.Item>
                <ListGroup.Item>Humidity : {this.props.weather.main.humidity}</ListGroup.Item>
                <ListGroup.Item>Pressure : {this.props.weather.main.pressure}</ListGroup.Item>
                <ListGroup.Item>Temperature : {this.props.weather.main.temp}</ListGroup.Item>
                </ListGroup>
}
<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                    
                </div>
            </>
        )
    }
}

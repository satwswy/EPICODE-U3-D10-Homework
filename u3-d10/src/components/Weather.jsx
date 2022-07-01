import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Weather extends Component {
    state = {
        weather: [],
        isLoading: true
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.query !== this.props.query) {
            this.fetchWeather() 
          }
    }
    fetchWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.query}&appid=59128235a57bd2ffeeecebfea30bd70f`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                weather: data.main,
                isLoading: false
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <>
                <div>
                {this.state.weather && 
                <ListGroup>
                <ListGroup.Item>Feels Like : {this.state.weather.feels_like}</ListGroup.Item>
                <ListGroup.Item>Humidity : {this.state.weather.humidity}</ListGroup.Item>
                <ListGroup.Item>Pressure : {this.state.weather.pressure}</ListGroup.Item>
                <ListGroup.Item>Temperature : {this.state.weather.temp}</ListGroup.Item>
            </ListGroup>
}
                    
                </div>
            </>
        )
    }
}

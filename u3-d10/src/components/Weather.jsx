import React, { Component } from 'react'

export default class Weather extends Component {
    state = {
        weather: [],
        isLoading: true
    }
    componentDidMount = () => {
        this.fetchWeather()
    }
    fetchWeather = async () => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.query}&appid=59128235a57bd2ffeeecebfea30bd70f`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                weather: data.main,
                isLoading: false
            })
        }
        catch(error){
            console.log(error)
        }
    }
  render() {
    return (
      <div>Weather</div>
    )
  }
}

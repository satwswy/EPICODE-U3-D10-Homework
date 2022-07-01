import React, { Component } from 'react'
import Weather from './Weather'
import {Form, Container, Row, Col, Button} from 'react-bootstrap'

export default class SelectCity extends Component {
    
    state = {
        searchQuery: '',
        weather: {},
        isLoading: true
    }
    fetchWeather = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchQuery}&appid=59128235a57bd2ffeeecebfea30bd70f&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                weather: data,
                isLoading: false
            })
        }
        catch (error) {
            console.log(error)
        }
    }

  render() {
    return (
        <Container>
        <Row>
            <Col md={8}>
                <Row>
                    <Col>
                   
                        <Form.Group>
                            <Form.Label className='text-light'>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                        <button 
                        onClick={this.fetchWeather}
                        >Submit</button>
                        
                        
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Weather  weather={this.state.weather}/> 
            </Col>
        </Row>
    </Container>
    
    )
  }
}

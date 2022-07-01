import React, { Component } from 'react'
import Weather from './Weather'
import {Form, Container, Row, Col, Button} from 'react-bootstrap'

export default class SelectCity extends Component {
    
    state = {
        searchQuery: '',
    }
  render() {
    return (
        <Container>
        <Row>
            <Col md={8}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                        
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Weather  query={this.state.searchQuery}/> 
            </Col>
        </Row>
    </Container>
    
    )
  }
}

import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Link to="/">
                                    <div
                                        className='nav-link'

                                    >
                                        Home
                                    </div>
                                </Link>
                                <Link to="/selectCity">
                                    <div
                                        className='nav-link'

                                    >
                                        SelectCity
                                    </div>
                                </Link>
                            </Nav>
                        </Container>
                    </Navbar>

                </>
            </div>
        )
    }
}

import React, { Component } from "react";
import './header.scss';
import { Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col } from 'react-bootstrap';


const Header = () => {
    return (

        <div >
            <Container>


                <Row className="d-flex mb-2 mt-2">
                    <Col md="5">

                    <Link to="/">Kijiji</Link>

                    </Col>

                    <Col className = "d-flex  flex-row md = 7">

                        <Col>
                            <Link to="/Register">Register</Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#pricing">Log In</Nav.Link>
                        </Col>

                        <Col>
                            <Link to="/PostAd">PostAd</Link>
                        </Col>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <Form>
                            <Form.Group controlId="search">
                                <FormControl type="text" placeholder="Search for anything..." size="sm" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row className = "d-flex flex-row md = 12">
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Buy & Sell</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Cars & Vehicles</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Real Estate</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Jobs</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Services</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Pets</Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Community </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link className="text-secondary" href="#pricing">Vacation Rentals</Nav.Link>
                    </Col>


                </Row>
            </Container>


        </div>







    );
}

export default Header;
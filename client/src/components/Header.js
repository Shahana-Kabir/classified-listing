import React, { Component } from "react";
import './header.scss';
import Home from '../pages/Home';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogOut from './LogOut';
import Join from './Join'

import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col } from 'react-bootstrap';
import Register from "../pages/Register";
import Hero from "./Hero";


const Header = (props) => {
    return (

        <div>
            <Container className="bg-light" >


                <Row className="d-flex mb-4 pt-4 justify-content-between mr-4 ml-4">
                    <Col md="5">

                        <Link to="/">Kijiji</Link>

                    </Col>
{/* 
                    <Col className="d-flex  flex-row justify-content-end">

                        <Col>
                            <Link to="/Register">Register</Link>
                        </Col>
                        <Col>
                            <Link to="/LogIn">LogIn</Link>
                        </Col> */}


                        {props.loggedIn ?


                            <Col>
                                <Link to="/PostAd">PostAd</Link>
                            </Col>
                            : ''
                        }
                   

                    {props.userName ?
                        <Col className="ml-2">
                        

                            Logged in as {props.userName}


                        </Col>
                        : ''}

                    {props.loggedIn ? <LogOut onLogout={props.onLogout} /> : <Join />}

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

                <Row className="d-flex flex-row md = 12">
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
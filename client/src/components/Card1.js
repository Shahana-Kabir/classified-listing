import React, { Component, useState, useEffect } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import car1 from '../assets/car1.jpg';
import Profile from '../pages/Profile';
const Card1 = (props) => {


    return (
        <div>
            <Container>

                <Card className="mr-9.37 ml-4 mt-4 mb-4" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={props.imagePath} className="mt-4" />
                    <Card.Body>
                        <Card.Title><strong>Ad Title:</strong> {props.ad}</Card.Title>
                        <Card.Text>
                            <strong> Posted by:</strong>{props.postedByName}
                        </Card.Text>

                        {/* <Card.Text>
                            <strong> Description:</strong>{props.description}
                        </Card.Text> */}

                        <Card.Text>
                            <strong> Price:</strong>{props.price}
                        </Card.Text>

                        <Link to={"/ads/" + props.id } className="d-flex flew-row justify-content-center pb-4">Details</Link>

                    </Card.Body>
                </Card>
            </Container>

        </div>


    );
}

export default Card1;
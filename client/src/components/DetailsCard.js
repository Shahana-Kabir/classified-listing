import React, { Component, useState, useEffect } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import sofa1 from '../assets/sofa1.jpg';
import Profile from '../pages/Profile';
import PostAd from '../pages/PostAd';

const DetailsCard = (props) => {

    // read the ID from url
    // fetch the details for the ad from server
    // create new API for getting details /localhost:8080/ads/:adId
    // set the state and render the details

    

    return (  
        <Container>
        <Card className="mr-9.37 ml-4 mt-4 mb-4" style={{ width: '18rem' }} >
        <Card.Img variant="top" src={props.imagePath} className="mt-4" />
        <Card.Body>
            
            <Card.Text>
                Description:{props.description}
            </Card.Text>

            <Card.Text>
                Price: {props.price}
            </Card.Text>
        </Card.Body>
    </Card>
    </Container>


    );
}
 
export default DetailsCard;

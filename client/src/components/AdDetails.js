import React, { Component, useState } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import sofa1 from '../assets/sofa1.jpg';


const AdDetails = () => {
    return (<div>
        <Container>

            <Card className="mr-9.37 ml-4 mt-4 mb-4" style={{ width: '18rem' }} >
                <Card.Img variant="top" src={sofa1} className="mt-4" />
                <Card.Body>
                    <Card.Title>Ad Title:</Card.Title>
                    <Card.Text>
                        Description:
                    </Card.Text>

                    <Card.Text>
                         Price
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>


    </div>
    );
}

export default AdDetails;
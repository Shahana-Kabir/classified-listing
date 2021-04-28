import React, { Component, Profiler, useState } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';
import sofa1 from '../assets/sofa1.jpg';
import sofa2 from '../assets/sofa2.jpg';
import sofa3 from '../assets/sofa3.jpg';
import sofa4 from '../assets/sofa4.jpg';
import sofa5 from '../assets/sofa2.jpg';
import sofa6 from '../assets/sofa2.jpg';
import AdDetails from './AdDetails';


const Hero = () => {

    function details (e){
        e.preventDefault();

         <AdDetails />

    }
    return (<div>
        <Container className="mt-4 bg-gradient">

            <h2>
                Popular Items...
            </h2>

            <Row className=" d-flex flex-row justify-content-between mt-4">
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} onClick = {details} >
                    <Card.Img variant="top" src={sofa1} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa2} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa3} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa4} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>

            <h2 className = "mt-4 mb-4">
                Suggestions for you...
            </h2>

            <Row className=" d-flex flex-row justify-content-between mt-4">
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa5} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa6} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa1} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mr-9.37 ml-4 " style={{ width: '12rem' }} >
                    <Card.Img variant="top" src={sofa1} />
                    <Card.Body>
                        <Card.Text>
                            Price: 200CAD
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>



        </Container>
    </div>);
}

export default Hero;
import React, { Component, Profiler, useState, useEffect} from "react";
import ReactDOM from 'react-dom'
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import { Link, Redirect, Route } from 'react-router-dom';
import sofa1 from '../assets/sofa1.jpg';

import AdDetails from './AdDetails';
import AdCard from '../pages/AdCard';
import Card1 from './Card1';
import PopularItem from './PopularItem';
const details = () => {

    return
    <AdDetails />
}

const Hero = () => {
    const [popular, setPopular] = useState([]);



    useEffect(async () => {
        const response = await axios.get('http://localhost:8080/popularAds/')
        setPopular(response.data)
    }, []);
    
    console.log(popular);


    return (<div>
        <Container className="mt-4 bg-gradient"  >

            <h2>
                Popular Items...
            </h2>

            <Row className="d-flex flex-row justify-content-between">
            {popular.map(ad => <Row key={ad.id} className="mb-4" xs="12"> <PopularItem {...ad} /> </Row>)}
                

                
            </Row>

            <h2 className="mt-4 mb-4">
                Most recent Ads...
            </h2>

            <Row>
                <AdCard />
            </Row>

     



        </Container>
    </div>);
}

export default Hero;
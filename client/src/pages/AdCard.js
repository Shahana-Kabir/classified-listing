import React, { Component, useState, useEffect } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import car1 from '../assets/car1.jpg';
import Card1 from '../components/Card1';



const AdCard = () => {
    const [ads, setAds] = useState([]);
    const [adsLoaded, setAdsLoaded] = useState(false);

    useEffect(async () => {
        if (!adsLoaded) {
            const response = await axios.get('http://localhost:8080/ads/');
            setAds(response.data);
            setAdsLoaded(true);
        }

    });



    return (<div>
        <Container>

            <Row>
                <Col>
                    <h1>
                        Ads posted
    </h1>
                </Col>

            </Row>

            <Row className = "d-flex flex-row justify-content-between">

                {ads.map(ad => <Row key={ad.id} className="mb-4" xs="12"> <Card1 onChange={() => setAdsLoaded(false)} {...ad} /> </Row>)}

            </Row>
        </Container>
    </div>);
}

export default AdCard;
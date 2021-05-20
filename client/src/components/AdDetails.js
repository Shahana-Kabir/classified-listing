import React, { Component, useState, useEffect } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import sofa1 from '../assets/sofa1.jpg';
import Profile from '../pages/Profile';
import PostAd from '../pages/PostAd';
import DetailsCard from "./DetailsCard";
import './adDetails.scss';



const AdDetails = (props) => {

    const adId = props.match.params.adId;
    const [ad, setAd] = useState({});
    const [deatilsLoaded, setDetailsLoaded] = useState(false);

    useEffect(async () => {
        if (!deatilsLoaded) {
            const response = await axios.get('http://localhost:8080/ads/' + adId);
            console.log(response.data);
           setAd(response.data);
           console.log(ad.id);

            setDetailsLoaded(true);
        }

    });

    //     const ad = axios.get('http://localhost:8080/ads/' + adId)
    //   .then (response=>{console.log(response)
    //     setAd(response);
    //   })
    //   .catch(error=>{console.log(err)});

    return (
        
        <Container>
       
        <Card className="mr-9.37 ml-4 mt-4 mb-4 "  style={{ height: '25rem'}}>
        <Row d-flex className = "mr-4 ml-4 flex-row justify-content-between">
        <Card.Img className = "image2 mt-4 ml-4" variant="top" src={ad.imagePath} style={{ width: '15rem', height: '15rem'}} />
      
        <Card.Img className = "image2 mt-4 mr-4" variant="top" src={ad.imagePath2} style={{ width: '15rem', height: '15rem'}} />
    
        </Row>
            <Row className = "mt-4 ml-4">
            <Card.Text>
                <strong>Description:</strong>{ad.description}
            </Card.Text>
            </Row>                  
    </Card>
    </Container>
    );             
}

export default AdDetails;
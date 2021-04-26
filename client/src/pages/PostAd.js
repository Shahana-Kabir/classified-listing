import React, { Component, useState } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card} from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AdCard from './AdCard';

const PostAd = () => {

    const [ad, setAd] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [posted, setPosted] = useState(false);
   

    const submit = async (e) => {
        e.preventDefault();

       
        const postAd = {
            ad, description, price         
        }


        const response = await axios.post('http://localhost:8080/ads/', postAd);

        console.log('From server');
        console.log(response.data);
        setPosted(true);
    }

    if (posted) {
        return (
            <Redirect to="/AdCard" />
        )
    }


    return (
        <div>

        <Form className="mr-4 ml-4" onSubmit={submit}>
            <Container className="d-flex">
                <Col>
                    <Form.Group >
                        <Form.Label>Ad title</Form.Label>
                        <Form.Control required type="text" onChange={(e) => setAd(e.target.value)} />

                        <Form.Control.Feedback type="invalid">
                            Text is required
                </Form.Control.Feedback>

                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" required rows={6} onChange={(e) => setDescription(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Description is required
                </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group >
                        <Form.Label>Price</Form.Label>
                        <Form.Control required type="Number" onChange={(e) => setPrice(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Price is required
                </Form.Control.Feedback>
                    </Form.Group>

                </Col>


               
                </Container>

                <Row>
                    <Col className = "d-flex justify-content-center mt-4">
                <Button variant="primary" type="submit">
                    Post Ad
                  </Button>
                  </Col>
               </Row>
        </Form>
        </div>
    );
}

export default PostAd;
import React, { Component, Profiler, useState } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AdCard from './AdCard';
import car1 from '../assets/car1.jpg';

const PostAd = () => {

    const [ad, setAd] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');   
    const [image, setImage] = useState(null);
    const [posted, setPosted] = useState(false);


    const submit = async (e) => {
        e.preventDefault();

        
        var formData = new FormData();        
        formData.append("ad", ad);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);
        const token = sessionStorage.getItem('token');
        formData.append("token", token);
        

        const response = await axios.post('http://localhost:8080/ads/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

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


                    <Col>
                    <Form.Group>
                            <Form.File label="Image" required onChange={(e) => setImage(e.target.files[0])} />
                        </Form.Group>
                    </Col>



                </Container>



                <Row>
                    <Col className="d-flex justify-content-center mt-4">
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
import React, { Component, useState } from "react";
import { Nav, Navbar, NavLink, Form, Button, FormControl, Container, Row, NavItem, Col } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validated, setValidated] = useState(false);
   const [posted, setPosted] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const submit = async (e) => {
          e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setValidated(true);
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        }
        else {
            setPasswordError(false);
        }
      

       var profileData = {
           name: form.name,
           email: form.email,
           password: form.password,
           confirmPassword: form.confirmPassword
       }

        const profile = {
            name, email, password, confirmPassword           
        }
    
        console.log(profile);
        const response = await axios.post('http://localhost:8080/profiles/', profile)




        console.log('From server');
        console.log(response.data);
           
       
         setPosted(true);
    }

    if (posted) {
        return (
            <Redirect to="/LogIn" />
        )
    }


    return (<div>
        <Form noValidate validated={validated} className = "mr-4 ml-4"  onSubmit={submit}>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                    Name is required
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group >
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                 </Form.Text>
                 <Form.Control.Feedback type="invalid">
                   Email is required
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Form.Control.Feedback type="invalid">
                   Password is required
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="Confirm Password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Form.Control.Feedback type="invalid">
                   Confirm password is required
                </Form.Control.Feedback>

            </Form.Group>


            <Button variant="primary" type="submit">
                Register
        </Button>
        </Form>
    </div>

    );
}

export default Register;



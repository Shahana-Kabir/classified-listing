import { Component } from 'react';
import Hero from '../components/Hero';


const Home = (props) => {

    return (<>
        <Hero loggedIn={props.loggedIn} />
       
    </>);

}

export default Home;
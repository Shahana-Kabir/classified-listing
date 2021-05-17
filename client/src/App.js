import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Register from './pages/Register';
import PostAd from './pages/PostAd';
import AdCard from './pages/AdCard';
import Hero from './components/Hero';
import Home from './pages/Home';
import AdDetails from './components/AdDetails';
import LogIn from './components/LogIn';
import Profile from './pages/Profile';
import { Component, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [ad, setAd] = useState('');

  const onLogIn = () => {
    setUserName(sessionStorage.getItem('name'));
    setLoggedIn(true);
  }

  const onLogout = () => {
    setUserName(null);
    setLoggedIn(false);
  }



  return (
    <div>
      <BrowserRouter>
        <Header loggedIn={loggedIn} userName={userName} onLogout={onLogout} />
        <Switch>
          <Route path='/' exact component={() => <Home loggedIn={loggedIn} />} />
          {/* <Route path = '/' exact component = {Hero} /> */}
          <Route path='/Register' component={Register} />
          <Route path='/LogIn' component={() => <LogIn onLogin={onLogIn} />} />
          <Route path='/PostAd' component={PostAd} />
          <Route path='/AdCard' component={AdCard} />
          <Route path='/Ads/:adId' component={AdDetails} />
          <Route path='/profiles/:profileId' component={Profile} />

        </Switch>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Register from './pages/Register';
import PostAd from './pages/PostAd';
import AdCard from './pages/AdCard';
import Hero from './components/Hero';
import AdDetails from './components/AdDetails';
import LogIn from './components/LogIn';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path = '/' exact component = {Hero} />
          <Route path='/Register' component={Register} />
          <Route path='/LogIn' component={LogIn} />
          <Route path='/PostAd' component={PostAd} />
          <Route path='/AdCard' component={AdCard} />
          <Route path='/AdDetails' component={AdDetails} />
          
        </Switch>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;

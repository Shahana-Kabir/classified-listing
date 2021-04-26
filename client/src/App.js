import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Register from './pages/Register';
import PostAd from './pages/PostAd';
import AdCard from './pages/AdCard';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/Register' component={Register} />
          <Route path='/PostAd' component={PostAd} />
          <Route path='/AdCard' component={AdCard} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

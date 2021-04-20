import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Register from './pages/Register';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/Register' component={Register} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

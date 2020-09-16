import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Contact from './Components/Contact/Contact';
import Plan from './Components/Plan/Plan';

function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
     <Route exact path='/jupiter-business-app' component={Home} />
     <Route path='/search' component={Search} />
     <Route path='/contact' component={Contact} />
     <Route path='/plan' component={Plan} />
     </Switch>
    </Router>
  );
}

export default App;

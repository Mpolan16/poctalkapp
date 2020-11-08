import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
        <Route exact path={"/"} component={Home}/>      
        </Switch>
        <Footer/>
    </Router>

  );
}

export default App;

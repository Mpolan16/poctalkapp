import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <NavBar/>
        <Switch>
        <Route exact path={"/"} component={Home}/>      
        <Route exact path={"/about"} component={About}/>      
        <Route exact path={"/contact"} component={Contact}/>      
        </Switch>
        <Footer/>
    </Router>

  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';

import { SpecialistsProvider } from './util/ContextApi.js';

function App() {
  return (

    <Router>
      <SpecialistsProvider >
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/resources"} component={Resources} />
        </Switch>
        <Footer />
      </SpecialistsProvider>
    </Router>

  );
}

export default App;

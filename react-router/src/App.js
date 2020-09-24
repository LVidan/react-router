import React from 'react';
import './App.css';

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={ContactUs} />
      </div>
    </Router>
  );
}

export default App;

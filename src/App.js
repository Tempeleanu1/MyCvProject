import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar></NavBar>


    <ScrollToTop/>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/About" component={About}></Route>
    </Switch>
    <Footer></Footer>
    </Router>
  </div>
  
  );
} 


export default App;

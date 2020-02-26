import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Curriculum Vitae</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
            <Link to='/'>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Home</a>
          </li>
            </Link>
            <Link to='/About'>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">About</a>
          </li>
          </Link>
          <Link to="/Contact">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">Contact</a>
          </li>
          </Link>

        </ul>
      </div>
    </div>
  </nav>
            </div>
        )
    }
}

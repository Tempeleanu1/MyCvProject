import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends Component {

    render() {
        return (
           
    <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Feel free to contact me</h2>
          
        </div>
      </div>
      <div className="col-md-6">
          <span className="fa-stack fa-4x">
          <img className="rounded-circle img-fluid"  src="https://w0.pngwave.com/png/431/84/telephone-iphone-computer-icons-phone-icon-png-clip-art.png" alt=""/>
          </span>
          <h4 className="service-heading">0757503323</h4>
        </div>    
    </div>
      
    </section>
        );
    }
      }
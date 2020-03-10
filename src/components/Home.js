import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';  

export default class Home extends Component {
    render() {
        return (
            <div>
                    <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">My Name is Tempeleanu Mihai</div>
        <div className="intro-heading text-uppercase">And this is my CV</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#knowledge">Tell Me More</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="knowledge">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Knowledge</h2>
          <h3 className="section-subheading text-muted">Languages/Libraries that I learned at the Informal School of IT Web Development course</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
          <img className="rounded-circle img-fluid"  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt=""/>
        
          </span>
          <h4 className="service-heading">HTML</h4>
          <p className="text-muted">Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.</p>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
          <img className="rounded-circle img-fluid"  src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt=""/>
          </span>
          <h4 className="service-heading">CSS</h4>
          <p className="text-muted">CSS. Stands for "Cascading Style Sheet." Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.</p>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
          <img className="rounded-circle img-fluid"  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt=""/>
          </span>
          <h4 className="service-heading">JavaScript</h4>
          <p className="text-muted">JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. ... Like server-side scripting languages, such as PHP and ASP, JavaScript code can be inserted anywhere within the HTML of a webpage..</p>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
          <img className="rounded-circle img-fluid"  src="https://www.netclipart.com/pp/m/276-2768580_react-native-logo-png.png" alt=""/>
          </span>
          <h4 className="service-heading">React</h4>
          <p className="text-muted">React (also known as React. js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
        </div>
      </div>
    </div>
  </section>
            </div>

        )
    }
}

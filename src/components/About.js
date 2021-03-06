import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                   <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">My Studies</h2>
          <h3 className="section-subheading text-muted">Below there's a list of places where I learnt to code</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="https://idart.utcluj.ro/images/tucn.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2017-2021</h4>
                  <h4 className="subheading">Technical University</h4>
                  <h4 className="subheading">of Cluj-Napoca</h4>

                </div>
                <div className="timeline-body">
                  <p className="text-muted">I am currently in the 3rd year of study at the Technical University of Cluj-Napoca and here I studied Java, C/C++ and MySql apart from the hardware stuff</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="data:image/jpeg;base64,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" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>October 2020 - March 2020</h4>
                  <h4 className="subheading">The Informal School of IT</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Studied HTML5, CSS3, Javascript, OOP, Ajax, React and GIT</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="https://previews.123rf.com/images/roxanabalint/roxanabalint1703/roxanabalint170300520/74660448-your-name-here-grunge-rubber-stamp-on-white-background-vector-illustration.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Take part in my evolution</h4>
                  <h4 className="subheading">Your company name here</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Be the next step in my web development journey</p>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}

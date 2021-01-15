import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import './css/aiya/style.css'
import CV from '../ReactJS_CV_UMBETOV.pdf'

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">
                Hello, My name is Shynggys.
                </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "This is my portfolio website",
                      "I am React JS Front End Developer",
                      "Click on 'View projects' to check portfolio "
                    ]}
                    typeSpeed={75}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View projects
                </a>
              </p>
              <a class="primary_btn" href={CV} target="blank">
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

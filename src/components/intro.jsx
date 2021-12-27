import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import './css/aiya/style.css'
import CV_eng from '../cv/CV_Eng_UMBETOV_frontend_engineer.pdf'
import CV_fr from '../cv/CV_Fr_Shynggys_UMBETOV_software_engineer.pdf'

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
              <h6 className="intro-title mb-4">
                Welcome to portfolio
              </h6>
              <h6 className="intro-title mb-4">
                Shynggys UMBETOV
              </h6>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Website developed using React JS",
                      "I am React Mobile Developer",
                      "As well as React JS, AWS Fullstack Dev",
                      "Click on check portfolio "
                    ]}
                    typeSpeed={30}
                    backDelay={1100}
                    backSpeed={20}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                {/**
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  Check portfolio
                </a>
                */}
                <a className="primary_btn" href="#work" role="button">
                    <span>Check portfolio</span>
                </a>
              </p>


                  <a className="primary_btn" href={CV_fr} target="blank">
                      <span>Download french CV</span>
                  </a>
                  <div className="pt-3">
                      <a className="primary_btn" href={CV_eng} target="blank">
                          <span>Download english CV</span>
                      </a>
                  </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;

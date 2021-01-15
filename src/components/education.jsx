import React from "react";
import './css/education.css'
//import myImage from "../img/myImage.png";


class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "ReactJS_skill",
          content: "React JS Web dev - coursera",
          porcentage: "100%",
          value: "30"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap coursera certificate",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "2019   Master Degree in Science & Technologies at Université de Poitiers"
        },
        {
          id: "second-p-about",
          content:
            "2016 : Bachelor Degree in Hydro Energy Generation & Management at UniSalle Institut Politechnique of Beauvais (Paris), France"
        },
        {
          id: "third-p-about",
          content:
            "2013 : Electrical Engineering at Kazakh National University"
        }
      ]
    };
  }

  render() {
    return (
      <div className="edu">
        <section id="education" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Certificates</p>
                        {this.state.skills.map(skill => {
                          return (
                            <React.Fragment key={skill.id}>

                              <span>{skill.content}</span>{" "}
                              <span className="pull-right">
                                {skill.porcentage}
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: skill.porcentage }}
                                  aria-valuenow={skill.value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Education</h5>
                        </div>

                        {this.state.about_me.map(content => {
                          return (
                            <p className="lead" key={content.id}>
                              {content.content}
                            </p>
                          );
                        })}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Education;

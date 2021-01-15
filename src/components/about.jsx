import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "30%",
          value: "30"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "30%",
          value: "30"
        },
        {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Typescript_skill",
          content: "Typescript",
          porcentage: "10%",
          value: "10"
        },
        {
          id: "Github_skill",
          content: "Github",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Trello_skill",
          content: "Trello & Office tools",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Laptop_mechanical_reparation_skill",
          content: "Laptop mechanical reparation",
          porcentage: "70%",
          value: "70"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "2021: Belorussian online shop project in Minsk."
        },
        {
          id: "second-p-about",
          content:
            "2019-2021 : Responsible of automated machines. Previously electrician in automobile industry - Lydall company"
        },
        {
          id: "third-p-about",
          content:
            "2017-2018 : Junior Developer at Codebusters. Mainly in HTML5 & CSS3, React JS 1fit.app project"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Skills</h5>
                    </div>
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
                      {/* <p className="title-s">Skill</p> */}
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
                        <h5 className="title-left">Experiences</h5>
                      </div>
                      <div>
                        <h6>Experience</h6>
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
    );
  }
}

export default About;

import React, { useState } from "react";
import {addSkillData, initExpData, initLangData, initSkillsData} from "../mockData/about";

const About = () => {
  const [skills, setSkills ] = useState(initSkillsData);
  const [languages, setLanguages] = useState(initLangData);
  const [experiences, setExperiences] = useState(initExpData);

  return(
    <div id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">

                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">Competences</h5>
                  </div>
                  
                  <div className="skill-mf">
                    {/* <p className="title-s">Skill</p> */}
                    {skills.map(skill => {
                      return (
                        <div className={"flex-column align-content-between"} key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          {/**
                          <img
                            height={80}
                            width={100}
                            src={skill.techno}
                            style={{ borderRadius: '50%' }}
                          />
                           */}

                           <span className="pull-right">
                           {skill.porcentage}
                           </span>
                          <div className="progress">
                            <div
                              className="progress-bar animate-positive"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">Experiences</h5>
                    </div>
                    
                    {experiences.map(content => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      )
                    )}
                    <div className={"flex-column justify-content-center"}>
                      <h5 className="title-left">Languages</h5>
                      {languages.map(lang => (
                              <a key={lang.id}>
                                {`${lang.content};   `}
                              </a>
                          )
                      )
                      }
                    </div>
                  </div>
                </div>

              </div>
              <div className="row">
                
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">Additional skills</h5>
                  </div>
                  
                  <div className="skill-mf">
                    {/* <p className="title-s">Skill</p> */}
                    {addSkillData.map(skill => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{" "}
                          <span className="pull-right">
                            {skill.porcentage}
                          </span>
                          <div className="progress">
                            <div
                              className="progress-bar animate-positive"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    {/**
                    <div className="title-box-2">
                      <h5 className="title-left">Experiences</h5>
                    </div>
                     */}
                    
                    {/**experiences.map(content => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      )
                    )*/}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

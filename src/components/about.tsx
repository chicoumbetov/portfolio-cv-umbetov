import React, { useState } from "react";
//import myImage from "../img/myImage.png";

const initExpData = [
  {
    id: "first-p-about",
    content: "2021: Belorussian online shop project in Minsk."
  },
  {
    id: "second-p-about",
    content: "2019-2021 : Responsible of automated machines. Previously electrician in automobile industry - Lydall company"
  },
  {
    id: "third-p-about",
    content: "Jan. 2017 - Aug. 2018 : Junior Developer at Codebusters. Mainly in HTML5 & CSS3, React JS 1fit.app project"
  },
  {
    id: "forth-p-about",
    content: "2017 : Project Manager on International Exhibition Astana-Expo 2017 "
  }
]

const initSkillsData = [
  { id: "HTML5_skill", content: "HTML5", porcentage: "90%", value: 90 },
  { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: 90 },
  { id: "JavaScript_skill", content: "JavaScript", porcentage: "80%", value: 90 },
  { id: "ReactJS_skill", content: "ReactJS", porcentage: "80%", value: 80 },
  { id: "Typescript_skill", content: "Typescript", porcentage: "80%", value: 80 },

]

const addSkillData = [
  { id: "AWS_skill", content: "AWS", porcentage: "60%", value: 60 },
  { id: "Github_skill", content: "Github", porcentage: "80%", value: 80 },
  { id: "Trello_skill", content: "Trello & Office tools", porcentage: "90%", value: 90 },
  { id: "Laptop_mechanical_reparation_skill", content: "Laptop mechanical reparation", porcentage: "70%", value: 70 }, 
  { id: "Python_skill", content: "Python", porcentage: "30%", value: 30 },
] 

const initLangData = [
  {
    id: "French",
    content: "French",
    porcentage: "80%",
    value: "80"
  },
  {
    id: "English",
    content: "English",
    porcentage: "90%",
    value: "90"
  },
  {
    id: "Russian",
    content: "Russian",
    porcentage: "98%",
    value: "98"
  },
  {
    id: "Spanish",
    content: "Spanish",
    porcentage: "30%",
    value: "30"
  },
  {
    id: "Kazakh",
    content: "Kazakh",
    porcentage: "90%",
    value: "90"
  },
]

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
                              aria-valuemin={0}
                              aria-valuemax={100}
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
                    
                    {experiences.map(content => (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      )
                    )}
                    <h5 className="title-left">Languages</h5>
                    {languages.map(lang => (
                        <div key={lang.id}>
                            {lang.content}
                        </div>
                        )
                      )
                    }
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

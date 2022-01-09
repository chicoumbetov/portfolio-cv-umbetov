import React from "react";
import './css/aiya/responsive.css'
import './css/aiya/style.css'
import './css/aiya/portfolio.css'
import './css/aiya/normalize.css'
import styled from "styled-components";
//3
import stockscroll1 from "../img/react-scroll-project/2.JPG";
import stockscroll2 from "../img/react-scroll-project/3.JPG";
import stockscroll3 from "../img/react-scroll-project/1.png";

//project 4
import stockhome from "../img/json-server-resto-project/home.png";
import stockcontactus from "../img/json-server-resto-project/contactus.png";

//project 6
import stocksimple1 from "../img/simple-project.png";
import stocksimple2 from "../img/simple-project.png";
import stocksimple3 from "../img/simple-project.png";

import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";
import {categories} from "../mockData/data";


const Container = styled.div`
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: "0px", flexDirection: "column"})}

`;

const Portfolio = () => {

    return (
        <div>
            <div className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">

                                    <div className="col-md-6 col-md-12">


                                        <section id="work" className="portfolio-mf sect-pt4 route">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6 col-md-12">

                                                        <div className="title-box text-center">
                                                            <h5 className="title-a">Portfolio</h5>
                                                            <p className="subtitle-a">
                                                                Portfolio itself is done by React JS, Typescript, SASS, Bootstrap
                                                                You can click and check deployed project, github code, deployed backend.
                                                            </p>
                                                            <p>Click on image to view more screenshots or just click on project link to go directly to see project</p>
                                                            <div className="line-mf"></div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>


                                            {/* <!--PORTFOLIO IMAGE-->*/}

                                            <div className="container">
                                                <div className="row">
                                                {/*<!--/.PORTFOLIO -->*/}
                                                </div>
                                                <div className="row all_projects_container">
                                                    {categories.map((item) => (
                                                        <CategoryItem item={item} key={item.id}/>
                                                    ))}
                                                </div>
                                            </div>


                                        </section>

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

export default Portfolio;

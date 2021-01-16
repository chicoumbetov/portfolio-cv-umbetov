import React from "react";
import './css/aiya/responsive.css'
import './css/aiya/style.css'
import './css/aiya/portfolio.css'
import './css/aiya/normalize.css'

//import stock
import stock1fit1 from "../img/1fit.app.png";
import stock1fit2 from "../img/1fit.app2.png";
import stock1fit3 from "../img/1fit.app3.png";

//
//minsk
import stockminsk1 from "../img//minsk/page.png";
import stockminsk2 from "../img//minsk/shoepage.png";
import stockminsk3 from "../img//minsk/5sformat.png";

//3
import stockscroll1 from "../img/react-scroll-project/2.JPG";
import stockscroll2 from "../img/react-scroll-project/3.JPG";
import stockscroll3 from "../img/react-scroll-project/1.png";

//project 4
import stockhome from "../img/json-server-resto-project/home.png";
import stockcontactus from "../img/json-server-resto-project/contactus.png";

//project 5
import stockpj from "../img/photojournal/1.png";
import stockpj2 from "../img/photojournal/2.png";

//project 6
import stocksimple1 from "../img/simple-project.png";
import stocksimple2 from "../img/simple-project.png";
import stocksimple3 from "../img/simple-project.png";

class Portfolio extends React.Component {
  render() {
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
                                  I've done React JS, HTML5 & CSS3 front - end part of projects. Back-end is done by my team mates. Connecting API we did in cooperation.
                                  
                                </p>
                                <a href="#projectlinks" >
                                <div >
                                <p >Links to projects are in separate section below</p>
                                </div>
                                </a>
                                
                                
                                <div className="line-mf"></div>
                              </div>

                            </div>

                          </div>
                        </div>

                        
                          {/*    <div class="col-md-10 content-right">
                          <!--PORTFOLIO IMAGE-->*/}
                        
                        <div className="container">
                          <div className="row">
                            
                            
                        
                        
                          <ul class="portfolio-image">
                            <div className="row">
                              {/*1st project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stock1fit1} data-lightbox="gallery-vmarine" >
                                  <img alt="foto" src={stock1fit1} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">1fit.app Sport application in App Store and Play Market</p>
                                    </div>
                                  </div>

                                </a>
                                <a
                                  href={stock1fit2}
                                  data-lightbox="gallery-vmarine"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                                <a
                                  href={stock1fit3}
                                  data-lightbox="gallery-vmarine"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                              </li>
                              <div className="projectsquare"></div>

                              {/*2nd Project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stockminsk1} data-lightbox="gallery-todo"
                                ><img alt="foto" src={stockminsk1} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">Landing Page.
                      International Project with Minsk(Belorussia)</p>
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href={stockminsk2}
                                  data-lightbox="gallery-todo"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                        </a>
                                <a
                                  href={stockminsk3}
                                  data-lightbox="gallery-todo"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                        </a>
                              </li>
                              <div className="projectsquare"></div>

                              {/*3rd Project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stocksimple1} data-lightbox="gallery-smth"
                                ><img alt="foto" src={stocksimple1} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">Landing Page</p>
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href={stocksimple2}
                                  data-lightbox="gallery-smth"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                        </a>
                                <a
                                  href={stocksimple3}
                                  data-lightbox="gallery-smth"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                      </a>
                              </li>
                              </div>
                              <div className="projectsquare"></div>

                              <div className="row">
                              {/*4th Project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stockpj} data-lightbox="gallery-four">
                                  <img alt="foto" src={stockpj} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">Langind page. Photo gallery</p>
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href={stockpj2}
                                  data-lightbox="gallery-four"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                                <a
                                  href={stockpj2}
                                  data-lightbox="gallery-four"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                              </li>

                              <div className="projectsquare"></div>

                              {/*5th Project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stockhome} data-lightbox="gallery-five"
                                ><img alt="foto" src={stockhome} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">Restaurant page with local json-server</p>
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href={stockcontactus}
                                  data-lightbox="gallery-five"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                                
                              </li>

                              <div className="projectsquare"></div>

                              {/*6Project */}
                              <li class="col-md-3 col-xs-4">
                                <a href={stockscroll1} data-lightbox="gallery-six">
                                  <img alt="foto" src={stockscroll1} className="img-fluid" />
                                  <div class="decription-wrap">
                                    <div class="image-bg">
                                      <p class="desc">Landing Page. Scroll</p>
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href={stockscroll2}
                                  data-lightbox="gallery-six"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                                <a
                                  href={stockscroll3}
                                  data-lightbox="gallery-six"
                                  style={{ display: "none" }}
                                >
                                  jsx-a11y/anchor-has-content warning
                                </a>
                              </li>
                              </div>

                          </ul>
                          {/*<!--/.PORTFOLIO IMAGE END-->*/}
                        
                        
                          
                        </div>
                        </div>


                      </section >

                    </div>





                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div >
    );
  }
}

export default Portfolio;

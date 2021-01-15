import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
//import 'normalize.css';
//import './components/css/normalize.css'
////import './animate.css';
import 'bootstrap/dist/css/bootstrap.css'; //about 2 column
import './img/icons/css/ionicons.css';    //contact section
import './img/font-awesome/css/font-awesome.css';
//import 'lightbox2/dist/css/lightbox.min.css'
import './style.css'; //about separate box

//import js libraries
//import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';        //Navbar
import 'bootstrap/dist/js/bootstrap.min.js';  //Navbar
import './libs/easing.js';                    //Navbar
//import 'lightbox2/dist/js/lightbox.min.js';

import 'bootstrap/dist/js/bootstrap.bundle.min';

//import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
//import Preloader from './components/preloader';
import Education from './components/education';



ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Education />
        <BackToTop />
        <Contact />
        
    </React.Fragment>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

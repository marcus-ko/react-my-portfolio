import React, {useState} from 'react';
import SlideRoutes from 'react-slide-routes'; /* used for animating page slides */
import { Route, NavLink } from 'react-router-dom'; 
import Homepage from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Contact from  './components/Contact/Contact';

import './App.scss';

// https://github.com/nanxiaobei/react-slide-routes

// const Home = () => <div className="card home">Home</div>;
// const Resume = () => <div className="card resume">Resume</div>;
// const About = () => <div className="card about">About</div>;
// const Contact = () => <div className="card contact">Contact</div>;

const App = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle =() => {
    setNavbarOpen(prev => !prev);
    document.body.classList.toggle('lock-scroll');
  }
  return(
<div className="container">
      <div id="hamburgerIcon" onClick={handleToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            
              {/* <ul id="mobilenav">
                <li><a href="#">Home</a></li>
                <li><a href="#articles">Projects</a></li>
                <li><a href="#footer">Contact</a></li>
              </ul> */}
             
            </div>
      <ul className={`menuNav ${navbarOpen ? "showMenu" :""}`}>
        <li>
          <NavLink to="/" end onClick={handleToggle}>Home</NavLink>
        </li>
        <li><NavLink to="/resume" onClick={handleToggle}>Resume</NavLink></li>

        <li><NavLink to="/contact" onClick={handleToggle}>Contact</NavLink></li>
      </ul>
    <div className="nav-wrapper">
      <div className="left-nav">
        <div className="nav-logo">
          <p>mk</p>
        </div>
      </div>
      <div className="right-nav">

        <nav className="navBar">
          <NavLink to="/" end>
            Home      
          </NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
     
    </div>
   

    <SlideRoutes duration={800}>
      <Route path="/" element={<Homepage />} />
      <Route path="/resume" element={<Resume />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<Contact />} />
    </SlideRoutes>
  </div>
  )
  
  };

export default App;

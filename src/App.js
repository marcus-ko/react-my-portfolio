import React, {useState, useRef} from 'react';
import SlideRoutes from 'react-slide-routes'; /* used for animating page slides */
import { Route, NavLink } from 'react-router-dom'; 
import Homepage from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Contact from  './components/Contact/Contact';
import { useOnClickOutside } from './components/Hooks/Hooks';

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

  const node= useRef();
  useOnClickOutside(node, () => setNavbarOpen(false));

  // const [checked, setChecked] = React.useState(true);

  // const handleToggleClose = (e) => {
  //   e.preventDefault();
  //   this.setState({checked: !this.state.checked});
  //  };

  return(
<div className="container">
      <div ref={node} id="hamburgerIcon" onClick={handleToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
      </div>
      
      {/* toggle hamburger menu styles here based variable boolean instead of css */}
      <style jsx>{`
        #hamburgerIcon span:nth-of-type(1) {
          transform: ${ navbarOpen ? 'rotate(45deg) translate(4px, -3px)': 'rotate(0deg) translate(0, 0)' }
        }
        #hamburgerIcon span:nth-of-type(2) {
          transform: ${ navbarOpen ? 'scaleX(0);' : '' }
          opacity: ${ navbarOpen ? '0' : '1' }
        }
        #hamburgerIcon span:nth-of-type(3) {
          transform: ${ navbarOpen ? 'rotate(-45deg) translate(2px, 0)' : '' }
        }
      `}
      </style>
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

import React from 'react';
import './Header.scss';
import TextLoop from 'react-text-loop';
// import Link from "react-router";
// import { BodyText } from "./ui";

const Header = props => {
  return (
    <div className="header-wrapper">
      <h1>MARCUS KO</h1>
      <h2>Front End Developer</h2>
      <h2>
      <span>Experience with&nbsp;</span>
        <TextLoop>
        
          <span> React</span>
          <span> Javascript</span>
          <span> SASS/LESS</span>
          <span> PUG JS</span>
          <span> JSON</span>
          <span> Slide-Routes</span>
          <span> Visual Studio</span>
          <span> Adobe Suites</span>
          <span> UX Design</span>
        </TextLoop>{' '}
        </h2>
    </div>
  );
};

export default Header;

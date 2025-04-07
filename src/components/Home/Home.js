import React from 'react'
import {useState} from 'react'
import './Home.css'
import Header from '../Home/Header'
import Card2 from '../Card2/Card2'
import Footer from '../Home/Footer'
import allstateThumb from '../../images/allstate-investors-logo-2.jpg'
import pmallLogo from '../../images/pmall-logo-no-tagline.svg'
import trLogo from '../../images/Logo.webp'
import primusLogo from '../../images/logo2-removebg-preview.png'
import githubLogo from '../../images/github-logo.jpg'
import flickrApiLogo from '../../images/flickr-api-logo.jpg'
import frontEndMentorLogo from '../../images/frontend-mentor-logo.jpg'
import emptySpace from '../../images/empty-card.png'
import Carousel from '../Carousel/Carousel'

const Home = () => {
  // Card data
  const [projects] = useState([
    {
      title: 'Personalization Mall',
      link: 'https://www.personalizationmall.com/',
      details: 'Developing and maintaining front-end features for an eCommerce platform, including functional enhancements and UI/UX styling updates.',
      languages: ['Visual Studio ASP.net', 'HTML', 'Vanilla JavaScript', 'jQuery', 'Vue', 'Google Tag Manager', 'Web Accessibility'],
      imgUrl: pmallLogo
    },
    {
      title: 'Things Remembered',
      link: 'https://www.thingsremembered.com/',
      details: 'Developing and maintaining front-end features for eCommerce platform, including functional enhancements and UI/UX styling updates.',
      languages: ['Visual Studio ASP.net', 'HTML', 'Vanilla JavaScript', 'jQuery', 'Vue', 'Google Tag Manager', 'Web Accessibility'],
      imgUrl: trLogo
    },
    {
      title: 'Primus Home Care',
      link: 'https://www.primushomecare.com/',
      details: 'Redesigned a local small business website as sole freelance developer, modernizing UI, enhancing functionality across devices, and launching an SEO-optimized, accessible site with custom interactive features.',
      languages: ['HTML', 'PugJS', 'jQuery', 'LESS', 'Bootstrap'],
      imgUrl: primusLogo
    },
    {
      title: 'Allstate Investors',
      link: 'https://www.allstateinvestors.com/',
      details: 'I worked with a team of developers and UX Designers to style the front end using PugJs, SASS, using a GulpJs workflow. Site can be viewed here',
      languages: ['HTML', 'PugJS', 'JavaScript', 'jQuery', 'LESS'],
      imgUrl: allstateThumb
    },
    {
      title: 'Flickr Photo Locator',
      details: 'Using Flickr\'s API, I created a website which locates where the most Flickr photos were taken and displays the results.',
      link: 'https://flickr-photo-locator.vercel.app/',
      languages: ['HTML', 'CSS', 'JavaScript', 'Mapbox', 'Heroku'],
      imgUrl: flickrApiLogo
    },
    {
      title: 'React Youtube Video Showcase Prototype',
      details: 'Created a page to showcase youtube videos using react',
      link: 'https://react-modal-youtube-lite-player.vercel.app/',
      languages: ['React', 'HTML', 'SASS', 'Vercel', 'react-list-youtube', 'react-router', 'Zustand'],
      imgUrl: githubLogo
    },
    {
      title: 'Article Preview Component',
      details: 'Frontend Challenge project.',
      link: 'https://article-preview-component-rofo6a75j-marcus-ko.vercel.app/',
      languages: ['HTML', 'PugJS', 'SASS', 'Vercel'],
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'Social Proof Page',
      details: 'Frontend Challenge project.',
      link: 'https://social-proof-section-5q5f3ry0v-marcus-ko.vercel.app/',
      languages: ['HTML', 'PugJS', 'SASS', 'Vercel'],
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'FAQ Accordion Component',
      details: 'Frontend Challenge project.',
      link: 'https://faq-accordion-card-433uhkuag-marcus-ko.vercel.app/',
      languages: ['HTML', 'PugJS', 'SASS', 'Vercel'],
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'HTML Portfolio',
      link: 'https://github.com/marcus-ko/html-css-javascript-portfolio.git',
      details: 'Previous responsive portfolio site created with HTML and CSS.  Form uses PHP to send mail.',
      languages: ['HTML', 'SASS', 'JavaScript', 'jQuery', 'GulpJS'],
      imgUrl: githubLogo
    }
  ]);

  const [titles] = useState([
    { role: 'Front End Developer' },
    { role: 'Graphic Designer' }
  ]);

  return (
    <div>
      <Carousel />
      <Header titles={titles}/>
      <Card2 projects={projects} />
      <Footer />
    </div>
  );
};


export default Home

import React from 'react'
import {useState} from 'react'
import './Home.css'
import Header from '../Home/Header'
import Carousel from '../Carousel/Carousel'
import Card2 from '../Card2/Card2'
import Footer from '../Home/Footer'
import allstateThumb from '../../images/allstate-investors-logo-2.jpg'
import githubLogo from '../../images/github-logo.jpg'
import flickrApiLogo from '../../images/flickr-api-logo.jpg'
import frontEndMentorLogo from '../../images/frontend-mentor-logo.jpg'
import emptySpace from '../../images/empty-card.png'

const Home = () => {

  // Card data
  const [projects, setProjects] = useState([
    {
      title: 'Allstate Investors',
      link: 'https://www.allstateinvestors.com/',
      details: 'I worked with a team of developers and UX Designers to style the front end using PugJs, SASS, using a GulpJs workflow. Site can be viewed here',
      language1: 'html',
      language2: 'pugjs',
      language3: 'javascript',
      language4: 'jquery',
      language5: 'less',
      imgUrl: allstateThumb
    },
    {
      title: 'HTML Portfolio',
      link: 'https://github.com/marcus-ko/html-css-javascript-portfolio',
      details: 'Responsive portfolio site created with HTML and CSS.  Form uses PHP to send mail.',
      language1: 'html',
      language2: 'sass',
      language3: 'javascript',
      language4: 'jquery',
      language5: 'gulpjs',
      imgUrl: githubLogo
    },
    {
      title: 'React Image Upload',
      details: 'I created a basic image upload app with react, node.js and AWS Javascript SDK which connects to an AWS S3 bucket to upload files. To access the demo, click here',
      link: 'https://react-aws-image-upload.herokuapp.com/',
      language1: 'html',
      language2: 'react',
      language3: 'css',
      imgUrl: githubLogo
    },
    {
      title: 'React Todo App',
      details: 'A React todo list created with Create React app using class components and React Transition Group for toggling item views here',
      link: 'https://react-todo-app-build.herokuapp.com/',
      language1: 'html',
      language2: 'react',
      language3: 'sass',
      imgUrl: githubLogo
    },
    {
      title: 'Flickr Photo Locator',
      details: 'Using Flickr\'s API, I created a website which locates where the most Flickr photos were taken and displays the results.',
      link: 'https://lit-ridge-99480.herokuapp.com/',
      language1: 'html',
      language2: 'css',
      language3: 'javascript',
      language4: 'mapbox',
      language5: 'heroku',
      imgUrl: flickrApiLogo
    },
    {
      title: 'Article Preview Component',
      details: 'Frontend Challenge project.',
      link: 'https://article-preview-component-rofo6a75j-marcus-ko.vercel.app/',
      language1: 'html',
      language2: 'pugjs',
      language3: 'sass',
      language4: 'vercel',
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'Social Proof Page',
      details: 'Frontend Challenge project.',
      link: 'https://social-proof-section-5q5f3ry0v-marcus-ko.vercel.app/',
      language1: 'html',
      language2: 'pugjs',
      language3: 'sass',
      language4: 'vercel',
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'FAQ Accordion Component',
      details: 'Frontend Challenge project.',
      link: 'https://faq-accordion-card-433uhkuag-marcus-ko.vercel.app/',
      language1: 'html',
      language2: 'pugjs',
      language3: 'sass',
      language4: 'vercel',
      imgUrl: frontEndMentorLogo
    },
    {
      title: 'work in progress',
      imgUrl: emptySpace
    }
  ]);

  const [titles, setTitle] = useState([
    {
      role: 'Front End Developer',
    },
    {
      role: 'Graphic Designer',
    }
  ])


  return (
    <div>

      {/* <Carousel /> */}
      <Header titles={titles}/>
      <Card2 projects={projects} />
      <Footer />
    </div>
  )
}

export default Home

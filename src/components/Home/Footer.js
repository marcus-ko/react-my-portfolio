import './Footer.scss'
import flickrLogo from '../../images/flickr-xxl.png'
import flickrLogoInversed from '../../images/flickr-xxl-modified.png'
import linkedInLogo from '../../images/linkedin-logo.png'
import linkedInLogoInversed from '../../images/linkedin-logo-modified.png'
import githubLogo from '../../images/github-white-logo.png'
import githubLogoInversed from '../../images/github-black-logo.png'

const Footer = props => {

  return(
    <div className="footer-wrapper">
      <div className="footer-copy">
        <div className="col left"></div>
        <div className="col center"> 
          <h4>Social Icons</h4>
          <ul className="footer-links">
            <li>
              <div className="link-icon">
                <a href="https://www.flickr.com/photos/inspired-photos/" target="_blank" rel="noreferrer">
                  <img className="logo-small" src={flickrLogo} alt="logo"/>
                  <img className="logo-small-inversed" src={flickrLogoInversed} alt="logo inversed"/>
                </a>
              </div>
            </li>
            <li>
              <div className="link-icon">
                <a href="https://www.linkedin.com/in/marcusko/" target="_blank" rel="noreferrer">
                  <img className="logo-small logo-alt-size" src={linkedInLogo} alt="linkedin icon" />
                  <img className="logo-small-inversed logo-alt-size" src={linkedInLogoInversed} alt="linkedin icon inverse" />
                </a>
              </div>
            </li>
            <li>
              <div className="link-icon">
                <a href="https://github.com/marcus-ko" target="_blank" rel="noreferrer">
                  <img className="logo-small" src={githubLogo} alt="github icon" />
                  <img className="logo-small-inversed" src={githubLogoInversed} alt="github icon inversed"/>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col right"></div>
 
      </div>
      <div className="footer-copy">
      <p>Built with 
<a href="https://create-react-app.dev/" >Create React App</a></p>
      </div>
    </div>
  )
}

export default Footer
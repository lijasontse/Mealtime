import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="mt-footer">
    <div className="mt-footer-image">
      <img src={window.footer} className="footer-img" alt="Yelp Footer"/>
    </div>
    <div className="about-links">

      <span className="github-icon">
        <a href="https://github.com/lijasontse/" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
          />
        </a>
      </span>

      <span className="angellist-icon">
        <a href="https://angel.co/u/jason-li-80" target="_blank">
          <FontAwesomeIcon
            icon={faAngellist}
            size="lg"
          />
        </a>
      </span>
      
      <span className="linkedin-icon">
        <a href="https://www.linkedin.com/in/tsejasonli/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
          />
        </a>
      </span>

    </div>
  </div>
)

export default Footer;
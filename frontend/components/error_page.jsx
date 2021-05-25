import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Footer from './footer/footer'

const errorPage = () => {
  return (
    <div>
      <NavBarContainer />
      <div className="error-page-container" > 
        <div className="error-page-msg-one">We couldn't find the page you're looking for.</div>
        <div className="error-page-msg-two">Try searching for something else instead?</div>
        <Link className="error-home" to="/">Return Home</Link>
      </div>
      <Footer />
    </div>
  )
}

export default errorPage;
import React from 'react';
import { Link } from 'react-router-dom';

const errorPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default errorPage;
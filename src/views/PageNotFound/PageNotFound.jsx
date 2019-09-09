import React from 'react';
import './PageNotFound.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page your looking for does not exist!</p>
      <Link to="/">Return to the App</Link>
    </div>
  )
};

export default PageNotFound;

import React from 'react';

//This component displays if there are no results for the search term
const NotFound = () => {
  return (
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search did not return any results. Please try again.</p>
      </li>
  )
}

export default NotFound;
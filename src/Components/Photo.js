import React from 'react';

//This function is responsible for showing each image.
const Photo = props => {
  return (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  );
}

export default Photo;

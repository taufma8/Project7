import React from 'react';

const Photo = props => {
  return (
    <li>
      <img src={props.image} alt="" />
    </li>
  );
}

export default Photo;

{/* <img src={props.url} alt={props.title} /> */}
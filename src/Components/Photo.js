import React from 'react';

const Photo = ({url}) => {
  return (
    <li>
      <img src={url} alt="pics" />
    </li>
  );
}

export default Photo;

{/* <img src={props.url} alt={props.title} /> */}
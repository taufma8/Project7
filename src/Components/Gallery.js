import React from 'react';
import Photo from './Photo';
// import NotFound from './NotFound';
import NoPic from './NoPic';


// class Gallery extends React.Component {
//   render() {
    const Gallery = props => {
      const results = props.data;
      let pictures;
      if (results.length > 0) {
        pictures = results.map(picture => <Photo images={pictures} key={picture.id}/>);
      } else {
        pictures = <NoPic />
      }
    return (
      <div className="photo-container" >
        <h2>Results</h2>
        <ul>
          {pictures}
        </ul>
      </div>
    );
  }

export default Gallery;
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


// class Gallery extends React.Component {
//   render() {
    const Gallery = props => {
      const results = props.data;
      let pictures;
      console.log(props);
      if (results.length > 0) {
        pictures = results.map(picture => <Photo url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} title={picture.title} key={picture.id}/>);
      } else {
        pictures = <NotFound />
      }

    return (
      <div className="photo-container" >
        <h2>{props.title}</h2>
        <ul>
          {pictures}
        </ul>
      </div>
    );
  }
// }
export default Gallery;
//Importing the different Components needed for this Component
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

//This Component takes the data fetched and if there are more than 0 pictures found, it will iterate over them and show each picture with it's properties
//If not found, then it will show the NotFound component.
// class Gallery extends React.Component {
//   render() {
const Gallery = props => {
  const results = props.data;
  let pictures;
  // console.log(props);
  if (results.length > 0) {
    pictures = results.map(picture => <Photo url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} title={props.title} key={picture.id}/>);
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
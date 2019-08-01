import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Photo from './Components/Photo';
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';
import apiKey from './config.js';

class App extends Component {
  state = {
    pictures: [],
    cats: [],
    oceans: [],
    sunsets: [],
  }

  componentDidMount () {
    // this.catsSearch();
    // this.oceansSearch();
    // this.sunsetsSearch();
  }

  search (searchTerm) {
    let picture = [];
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
        // .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log('Looks like there was a problem', error))
        .then(function (json) {
            picture = (json.photos)
            console.log(picture); 
        });
  }

  catsSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    // .then(checkStatus)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        cats: response.formData.photos.photo,
      }));
    })
    .catch(error => {
      console.log('Looks like there was a problem', error);
    });
  }

  sunsetsSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
    // .then(checkStatus)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        sunsets: response.formData.photos.photo,
      }));
    })
    .catch(error => {
      console.log('Looks like there was a problem', error);
    });
  }

  oceansSearch = () => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=oceans&per_page=24&format=json&nojsoncallback=1`)
    // .then(checkStatus)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        oceans: response.formData.photos.photo,
      }));
    })
    .catch(error => {
      console.log('Looks like there was a problem', error);
    });
  }
    // .then(function (json) {
    //     picture = (json.photos)
    //     console.log(picture); 
    // });

  // handleAddedItem = (input) => {
  //   this.setState({
  //     people: [
  //       {
  //         item: input,
  //         image: 

  //       }
  //     ]
  //   });
  // }

  render() {
    // this.search('ocean');
    // this.search('cats');
    // this.search('sunset');
    return (
      <div className="main-container">
        <Search searchItem={this.handleAddedItem}/>
        <Nav 
          cats={this.state.cats}
          oceans={this.state.oceans}
          sunsets={this.state.sunsets}
        />
        <Photo />
        {/* <Photo />
        <Photo /> */}
        <Gallery />
        <NotFound />
      </div>
    );
  }
}
export default App;

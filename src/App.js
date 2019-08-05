import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import apiKey from './config.js';

class App extends Component {
    constructor() {
      super()
      this.state = {
        isLoading: false,
        pictures: []
    }
  }

  search(searchTerm) {
    // let pictures = [];
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      // .then(checkStatus)
      .then(response => response.json())
      .then(responseData => {
          this.setState({pictures: responseData.photos.photo});
      })
      .catch(error => console.log('Looks like there was a problem', error))
      // .then(function (json) {
      //   // picture = (json.photos)
      //   // console.log(picture);
      // });
    // this.setState({
    //   pictures: this.photos
    // })
    // let searchType = 'cats';
    // let state = state.pictures;
    // state[searchType];
    // this.setState(state);
  }

  componentDidMount() {
    this.setState({
      isLoading: true})
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    // .then(checkStatus)
    .then(response => response.json())
    .then(responseData => {
        this.setState({
          pictures: responseData,
          isLoading: false
        });
    })
    .catch(error => console.log('Looks like there was a problem', error))
    this.catsSearch();
    this.oceansSearch();
    this.sunsetsSearch();
  }

  catsSearch = () => {
    this.search('cat')
  }

  sunsetsSearch = () => {
    this.search('sunsets');
  }

  oceansSearch = () => {
    this.search('ocean');
  }

  render() {
    // this.search('ocean');
    // this.search('cats');
    // this.search('sunset');
    const text = this.state.isLoading ? "Loading..." : this.state.pictures;
    return (
      <div className="container">
        {/* <p>{text}</p> */}
        <Search 
        // searchItem={this.search} 
        //   value={this.state.search}
        //   handleValueChange={this.handleValueChange}
        //   handleSubmit={this.handleSubmit} 
          />
        <Nav
          cats={this.state.cats}
          oceans={this.state.oceans}
          sunsets={this.state.sunsets}
        />

        <Gallery 
          data= {this.state.pictures}
        />

      </div>
    );
  }
}
export default App;


  //   catsSearch = () => {
  //     fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
  //       // .then(checkStatus)
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(data => {

  //         let pictures = data.response;
  //       });
  //           return (
  //             <li key={pictures.results}>
  //               <img src={pictures.picture.medium} alt="" />
  //             </li>
  //           )
  //         }
  //     this.setState({ pictures: pictures });
  //     console.log('state', this.state.pictures);

  // }
  //     .catch(error => {
  //       console.log('Looks like there was a problem', error);
  //     });
  // }

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

   //   fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
  //   .then(res => res.json())
  //   .then(json => json.pictures)
  //   .then(pictures => this.setState({ 'pictures': pictures }))
  // }
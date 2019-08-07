import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import apiKey from './config.js';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      pictures: [],
      cats: [],
      oceans: [],
      sunsets: []
    }
  }

  //Search Function
  search = (searchTerm) => {
    //Setting loading state to true when search function is searching
    this.setState({
      isLoading: true
    })
    //Fetching data from Flickr
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      //Converting response to JSON format
      .then(response =>
        response.json())
      //Not sure what this one's doing
      .then(responseData => {
        this.setState({
          pictures: responseData.photos.photo
        });
      })
      //Catching error if there are any issues fetching data from third-party API
      .catch(error => console.log('Looks like there was a problem fetching your API data.', error))
  }

  //This method does the searches for my chosen topics
  componentDidMount() {
    this.search('desserts');
    // if (this.search == 'cats') {
    //   this.catsSearch();
    // } else if (this.search == 'oceans') {
    // this.oceansSearch();
    // } else if (this.search == 'sunsets') {
    // this.sunsetsSearch();
    // } else {
    //   this.search('desserts');
    // }
  }

  //This method searches for cats
  catsSearch = () => {
    this.search('cats');
  }

  // //This method searches for sunsets
  // sunsetsSearch = () => {
  //   this.search('sunsets');
  // }

  // //This method searches for oceans
  // oceansSearch = () => {
  //   this.search('ocean');
  // }

  //Render method
  render() {
    //Loading status
    // const text = this.state.isLoading ? "Loading..." : this.state.pictures;
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.search}/>
          <Nav />
          <Switch>
            <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            {/* <Route path="/:name" component={Gallery} /> */}
            <Route exact path='/:name' render={() => <Gallery data={this.state.pictures} search={this.search} />} />
            <Route exact path='/cats' render={() => <Gallery data={this.state.pictures} search={this.search} searchTerm='cats' />} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;

// this.search('cats');
// this.search('sunsets');
// this.search('ocean');

  {/* cats={this.state.cats}
            oceans={this.state.oceans}
            sunsets={this.state.sunsets} */}
          

          {/* <Gallery
            data={this.state.pictures}
          /> */}
{/* <p>{text}</p> */ }


    //   value={this.state.search}
    //   handleValueChange={this.handleValueChange}
    //   handleSubmit={this.handleSubmit} 

        // this.setState({
    //   isLoading: true})
    // fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    // // .then(checkStatus)
    // .then(response => response.json())
    // .then(responseData => {
    //     this.setState({
    //       pictures: responseData,
    //       isLoading: false
    //     });
    // })
    // .catch(error => console.log('Looks like there was a problem', error))

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
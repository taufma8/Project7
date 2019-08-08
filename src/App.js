import React, { Component } from 'react';
// import './App.css';

//Importing the different Components, API key, as well as the routes.
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import apiKey from './config.js';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//Creating a class App component with an empty array where my pictures object will be entered into.
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      pictures: []
    }
  }

  //Search Function
  //Setting loading state to true when search function is searching
  search = (searchTerm, istrue = false) => {
    this.setState({
      isLoading: true
    })

    //Fetching data from Flickr using the API key and any search term's the user uses and converting response to JSON format
    //Catching error if there are any issues fetching data from third-party API
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response =>
        response.json())
      .then(responseData => {
        this.setState({
          pictures: responseData.photos.photo
        });
      })
      .catch(error => console.log('Looks like there was a problem fetching your API data.', error))
  }

  //This method does the searches for my chosen topics for my home page.
  //This method shows me that data was fetched and displayed on the page.
  componentDidMount() {
    this.search('desserts');
  }

  isTrue = (istrue = true) => {
    this.setState({
      isLoading: istrue
    });
  }

  //Render method
  render() {
    //Loading status
    // const text = this.state.isLoading ? "Loading..." : this.state.pictures;
    return (
      <BrowserRouter>
        <div className="container">

          <Search onSearch={this.search}/>

          <Nav istrue={this.isTrue} onClick={this.search}/>

          <Switch>
            <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            <Route exact path='/:name' render={() => <Gallery search={this.search} data={this.state.pictures} />} />
            {/* <Route exact path='/cats' render={() => <Gallery data={this.state.pictures}/>} /> */}

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;

    // if (this.search == 'cats') {
    //   this.catsSearch();
    // } else if (this.search == 'oceans') {
    // this.oceansSearch();
    // } else if (this.search == 'sunsets') {
    // this.sunsetsSearch();
    // } else {
    //   this.search('desserts');
    // }
    
  // //This method searches for sunsets
  // sunsetsSearch = () => {
  //   this.search('sunsets');
  // }

  // //This method searches for oceans
  // oceansSearch = () => {
  //   this.search('ocean');
  // }
  
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
import React, { Component } from 'react';

//Importing the different Components, API key, as well as the routes.
import Nav from './Components/Nav';
import Search from './Components/Search';
import Gallery from './Components/Gallery';
import Error from './Components/Error';
import apiKey from './config.js';

//Importing routers
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
      loading: true,
      pictures: [],
      showError: true
    }
  }

  //This method does the searches for my chosen topics for my home page.
  //This method shows me that data was fetched and displayed on the page.
  componentDidMount() {
    this.search('desserts');
  }

  isTrue = () => {
    this.setState({
      loading: true
    });
  }

  toggleError = () => {
    this.setState((prevState) => {
      return { showError: !prevState.showError }
    })
  };
  
  //Search Function
  //Setting loading state to true when search function is searching
  search = (searchTerm) => {
    this.setState({
      loading: true
    })

    //Fetching data from Flickr using the API key and any search term's the user uses and converting response to JSON format
    //Catching error if there are any issues fetching data from third-party API
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response =>
        response.json())
      .then(responseData => {
        this.setState({
          pictures: responseData.photos.photo,
          loading: false,
          // title: responseData.photos.title
        });
      })
      .catch(error => console.log('Looks like there was a problem fetching your API data.', error))
  }


  //Render method
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Search onSearch={this.search}/>

          <Nav istrue={this.isTrue} onClick={this.search}/>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            :
          <Switch>
            <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
            <Route exact path='/:name' render={() => <Gallery search={this.search} data={this.state.pictures} />} />
            <Route component={Error} />
          </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

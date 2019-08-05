import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
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

    componentDidMount() {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
        // .then(checkStatus)
        .then(response => {
            this.setState({
                pictures: response.data.data,
                isLoading: true})
        })
        .catch(error => {
            console.log('Looks like there was a problem', error)
        }) 
    }

    render() {
        console.log(this.state.pictures);
        // const text = this.state.isLoading ? "Loading..." : this.state.pictures;
        return (
            <div className="container">
                <Search />
                <Nav />
                <Gallery 
                    data={this.state.pictures}
                />
            </div>
        );
    }
}

export default App;
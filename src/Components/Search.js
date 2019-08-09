//Importing React and Router.
import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

//Creating the search class and setting the search term to empty.
class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      loading: false
    }
  }
  //This will update the search term state.
  //passed a DOM event for the change in the element.
  //event object provides a target property which points to the underlying input element in the dom.
  //Also binds the 'this' to handleChange method so we can use it later on in this Component.
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
      loading: true
    });
  }


  //This method handles what happens when you click submit/magnifying glass/search
  //It takes whatever you type in to the search bar and turns it into lowercase
  //It then provides the path it should display when search term is submitted
  //Pushes path to the history so even if you press back, forward or refresh on the page, it will keep track of your browser history
  //It also searches for the term submitted and resets the search bar so it's empty again.
  handleSubmit = (e) => {
    e.preventDefault();
    let value = this.searchTerm.value.toLowerCase();
    let path = `/${value}`
    this.props.history.push(path);
    this.props.onSearch(value);
    e.currentTarget.reset();
  }

  render() {
    // console.log(this.state.searchTerm);
    return (
      <form
        className="search-form"
        onSubmit={this.handleSubmit}>
        <input
          type="search"
          name="searchTerm"
          id="search-input"
          className="search-input"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          ref={(input) => this.searchTerm = input}
          placeholder="I would like to see pictures of..."
          required />
        <button
          type="submit"
          value="&#x1F50D;"
          id="search-submit"
          className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </button>
      </form>
    );
  }
}

export default withRouter(Search)


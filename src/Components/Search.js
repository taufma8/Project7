import React from 'react';

class Search extends React.Component {

  state = {
    value: ''
  }

  //will update the value state.
  //passed a DOM event for the change in the element.
  //event object provides a target property which points to the underlying input element in the dom.

  handleValueChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchItem(this.state.value);
  }

  render() {
    console.log(this.state.value)
    return (
        <div>
          <form onSubmit={this.handleSubmit} action="#" method="get">
          <input type="search" id="search-input" className="search-input" value={this.state.value} onChange={this.handleValueChange} placeholder="Search..."/>
          <input type="submit" value="&#x1F50D;" id="search-submit" className="search-submit"/>
          </form>
        </div>
    );
  }
}

export default Search;
      
            

            
                {/* <!-- Not Found --> */}
                {/* <li className="not-found">
                  <h3>No Results Found</h3>
                  <p>Your search did not return any results. Please try again.</p>
                </li> */}
              {/* </ul> */}
      //       </div>

      //     {/* </div> */}
      //   </body>
      // </html>

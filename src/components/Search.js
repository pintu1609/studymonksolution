
import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: ''
  //   };
  // }

  // handleInputChange = (event) => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  handleInputChange = (e) => {
    this.props.setSearchValue(e.target.value);
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onSearch(this.state.searchTerm);
  // };

  render() {
    return (
      <div>
        <div className="search d-flex my-3" style={{ alignItems: 'center', justifyContent: 'center',width: 550 }}>
          {/* <form className="d-flex" role="search" style={{ width: 550 }} onSubmit={this.handleSubmit}> */}
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              // value={""}
              onChange={this.handleInputChange}
            />
            {/* <button className="btn btn-outline-success" type="submit"> */}
              {/* Search */}
            {/* </button> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default Search;

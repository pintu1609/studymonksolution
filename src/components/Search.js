
import React, { Component } from 'react';

class Search extends Component {
  

  handleInputChange = (e) => {
    this.props.setSearchValue(e.target.value);
  };

  

  render() {
    return (
      <div>
        <div className="search d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div className="search d-flex my-3" style={{ alignItems: 'center', justifyContent: 'center',width: 550 }}>
            
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                
                onChange={this.handleInputChange}
              />
            
           </div>
        </div>
      </div>
    );
  }
}

export default Search;

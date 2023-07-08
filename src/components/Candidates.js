import React, { Component } from 'react';

import Search from './Search';
import CandiatesItem from './CandiatesItem';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { articles } from './data';
import withRouter from '../utils/withRouter';
import Footer from './Footer';


class Candidates extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: articles,
      loading: false,
      searchValue: ''
    };
  }

  componentDidMount() {
    const { isloggedIn, navigate } = this.props;

    if (!isloggedIn) {
      navigate("/login"); 
    }
  }
  // const [searchTerm, setSearchTerm] = useState();
//   handleSearch = (searchTerm) => {
//     const filteredArticles = this.state.articles.filter((article) =>
//       // article.title.toLowerCase().includes(searchTerm.toLowerCase())
//       {const { name, role, location } = article;
//       //const { city, state, country } = location;
//       const searchFields = [name, role, location];
//       return searchFields.some((field) =>
//         field?.toLowerCase()?.includes(searchTerm.toLowerCase())
//       );
//    }
//     )
//     this.setState({ filteredArticles });
//    };

handleSearchChange = (value) => {
  this.setState({ searchValue: value });
};

  render() {

    const filteredArticles = articles.filter((article) =>{
      // article.title.toLowerCase().includes(searchTerm.toLowerCase())
        
      
        
          const { name, role, location } = article;
      //const { city, state, country } = location;
      const searchFields = [name, role, location];
      // console.log(this.state.searchValue)
      return searchFields.some((field) =>
        field.toLowerCase().includes(this.state.searchValue.toLowerCase())
      );
      })
    return (
      <div>
        <NavBar />
        <Search setSearchValue={this.handleSearchChange} />
        <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <h2>Candidates List</h2>
        </div>
        <div className="row">
          {filteredArticles.map((element) => (
            <div className="col-md-4" key={element.userid}>
              <CandiatesItem
                title={element.role}
                name={element.name}
                description={element.description}
                location={element.location}
                skills={element.skills}
              />
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isloggedIn: state.rootReducer.isloggedIn,
    userDetails: state.rootReducer.user,
  };
};

export default connect(mapStateToProps)(withRouter(Candidates));
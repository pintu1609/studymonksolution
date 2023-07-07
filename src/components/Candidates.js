import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import CandiatesItem from './CandiatesItem';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { articles } from './data';
import withRouter from '../utils/withRouter';
import Footer from './Footer';
// import { useState } from 'react';

class Candidates extends Component {
  //  navigate = useNavigate();
  constructor() {
    super();
    this.state = {
      articles: articles,
      loading: false,
    };
  }

  componentDidMount() {
    const { isloggedIn, navigate } = this.props;

    if (!isloggedIn) {
      navigate("/login"); // Navigate to the login page if not logged in
    }
  }
  // const [searchTerm, setSearchTerm] = useState();
  handleSearch = (searchTerm) => {
    const filteredArticles = this.state.articles.filter((article) =>
      // article.title.toLowerCase().includes(searchTerm.toLowerCase())
      {const { name, role, location } = article;
      //const { city, state, country } = location;
      const searchFields = [name, role, location];
      return searchFields.some((field) =>
        field?.toLowerCase()?.includes(searchTerm.toLowerCase())
      );
  }
    )
    this.setState({ filteredArticles });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Search onSearch={this.handleSearch} />
        <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <h2>Candidates List</h2>
        </div>
        <div className="row">
          {this.state.articles.map((element) => (
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
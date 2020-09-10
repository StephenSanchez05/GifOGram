import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './containers/Main';
import BlogsContainer from './containers/BlogsContainer';
import { fetchBlogs } from './actions/blogActions';
import './index.css';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.fetchBlogs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.blogs !== prevProps.blogs){
      this.props.fetchBlogs();
    }
  }


  render() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path="/home" component={Main} />
      <Route exact path="/posts" component={BlogsContainer} />
    </div>
    </Router>
  );
}
}

const mapDispatchToProps = state => {
  return {
    user: state.user,
    blogs: state.blogs.length
  }
}

export default connect(mapDispatchToProps, {fetchBlogs} )(App)

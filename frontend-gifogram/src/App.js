import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './containers/Main';
import { fetchBlogs } from './actions/blogActions';
import './index.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchBlogs()
  }

  render() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
}

const mapDispatchToProps = state => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapDispatchToProps, { fetchBlogs })(App)

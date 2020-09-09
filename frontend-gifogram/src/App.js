import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './containers/Main';
import { fetchBlogs } from './actions/blogActions';
import './index.css';
import Nav from './components/Navigation/Nav';

class App extends Component {

  componentDidMount() {
    this.props.fetchBlogs()
  }

  componentDidUpdate(prevProps) {
    if (this.props.blogs !== prevProps.blogs){
      this.props.fetchBlogs();
    }
  }


  render() {
    console.log(this.props.blogs)
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
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

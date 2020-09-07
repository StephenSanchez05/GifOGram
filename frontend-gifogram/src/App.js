import React, { Component } from 'react';
import Main from './containers/Main';
import BlogsContainer from './containers/BlogsContainer';
import { loginUser } from './actions/userActions';
import './index.css';

class App extends Component {

  render() {
  return (
    <div className="App">
      <Main />
      <BlogsContainer />
    </div>
  );
}
}

export default App;

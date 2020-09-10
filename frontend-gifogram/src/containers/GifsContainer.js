import React, { Component } from 'react';
import GifInput from '../components/Gif/GifInput';
import GifList from '../components/Gif/GifList';
import { postGif, getGifs } from '../actions/gifActions';

import { connect } from 'react-redux'

class GifsContainer extends Component {

  componentDidMount() {
      this.props.getGifs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list){
      this.props.getGifs();
    }
  }

    
    render () {
        return (
            <div>
                <GifInput
                postGif={this.props.postGif} 
                blogid={this.props.blogger.id}/>
                <GifList
                blogid={this.props.blogger.id}
                gifs={this.props.gifs}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { 
        blogs: state.blogs,
        gifs: state.gifs,
        list: state.gifs.length
    }
}


export default connect(mapStateToProps, { postGif, getGifs })(GifsContainer)
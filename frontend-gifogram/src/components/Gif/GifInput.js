import React, { Component } from 'react';

class GifInput extends Component {

    constructor() {
        super();
        this.fetchGifs = this.fetchGifs.bind(this);
    }
    state = {
        query: "",
        blog_id: "",
        gifs: ["https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif"]
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        });
    }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g&limit=1`)
          .then(res => res.json())
          .then(({data}) => {
            this.setState({ gifs: data.map( gif => ( gif.images.original.url ) ) })
          })
      }


        handleSubmit = event => {
            event.preventDefault();
            this.props.postGif({url: this.state.gifs[0], blog_id: this.props.blogid})
            this.fetchGifs();
            this.setState({
                query: '',
                blog_id: ''
            });
        }

        
        render() {
            return (
                <div>
                <form onSubmit={this.handleSubmit} >
                    <label>React with a Gif:  </label>
                    <input
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
       }
}

export default GifInput
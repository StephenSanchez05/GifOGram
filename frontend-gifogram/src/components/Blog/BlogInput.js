import React, { Component } from 'react'

class BlogInput extends Component {
    state = {
        post: ''
    }

    handleChange = event => {
        this.setState({
            post: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addPost({post: this.state.pest, user_id: this.props.userid})
        this.setState({
            post: ''
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Write a Post!</label>
                    <input
                    type="post"
                    value={this.state.post}
                    onChange={this.handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }

};

export default BlogInput
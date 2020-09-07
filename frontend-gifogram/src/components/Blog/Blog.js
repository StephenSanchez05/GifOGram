import React, { Component } from 'react';

class Blog extends Component {

    render() {
        return (
            <div>
                <li>
                    {this.props.blog.post}
                </li>
            </div>
        )
    }
};

export default Blog;
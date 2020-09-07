import React, { Component } from 'react';
import Blog from './Blog';

class Blogs extends Component {

    render() {
        const { blogs } = this.props;
        const associatedBlogs = blogs;

        const blogList = associatedBlogs.map((blog, index) => {
            return <Blog key={index} blog={blog} />
        })

        return (
            <div>
                <ul>
                    {blogList}
                </ul>
            </div>
        );
    }
};

export default Blogs;
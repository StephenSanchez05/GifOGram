import React, { Component } from 'react';
import BlogInput from '../components/Blog/BlogInput';
import Blogs from '../components/Blog/Blogs';
import { postBlog } from '../actions/blogActions';

import { connect } from 'react-redux'

class BlogsContainer extends Component {

    render () {
        return (
            <div>
                {this.props.user?.user?.id ? (<BlogInput
                postBlog={this.props.postBlog} 
                userid={this.props.user.user.id}/>)  :  null }
                {this.props.user?.user?.id ? (<Blogs
                blog={this.props.blogs}/>)  :  null }

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        blogs: state.blogs
    }
}


export default connect(mapStateToProps, { postBlog })(BlogsContainer)
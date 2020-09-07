import React, { Component } from 'react';
import BlogInput from '../components/Blog/BlogInput';
import Blogs from '../components/Blog/Blogs';
import { connect } from 'react-redux'

class BlogsContainer extends Component {

    render () {
        return (
            <div>
                <BlogInput
                addPost={this.props.addPost}
                // userid={this.props.user.id}
                // 
                />
                <Blogs
                blogs={this.props.blogs}
                // userid={this.props.user.id}                
                />
            </div>
        )
    }
}

const mapStateToProps = ({blogs}) => {
    return {blogs}
}

const mapDispatchToProps = dispatch => ({
    addPost: blog => dispatch({type: 'ADD_POST', blog})
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer)
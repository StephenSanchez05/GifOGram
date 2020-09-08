import React, { Component } from 'react';
import BlogInput from '../components/Blog/BlogInput';
import { postBlog } from '../actions/blogActions';

import { connect } from 'react-redux'

class BlogsContainer extends Component {

    render () {
        return (
            <div>
                {this.props.user?.user?.id ? (<BlogInput
                postBlog={this.props.postBlog} 
                userid={this.props.user.user.id}/>)  :  null }

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        user: state.user
    }
}


export default connect(mapStateToProps, { postBlog })(BlogsContainer)
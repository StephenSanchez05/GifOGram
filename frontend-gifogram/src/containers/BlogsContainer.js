import React, { Component } from 'react';
import BlogInput from '../components/Blog/BlogInput';

import { connect } from 'react-redux'

class BlogsContainer extends Component {

    render () {
        return (
            <div>
                {this.props.user?.user?.id ? (<BlogInput
                addPost={this.props.addPost} 
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

const mapDispatchToProps = dispatch => ({
    addPost: blog => dispatch({type: 'ADD_POST', blog})
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogsContainer)
import React, { Component } from 'react';
import BlogsContainer from '../../containers/BlogsContainer'

class User extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>
                <BlogsContainer user={user} />
            </div>
        )
    }
}

export default User;
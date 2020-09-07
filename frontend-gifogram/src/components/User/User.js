import React, { Component } from 'react';
import BlogsContainer from '../../containers/BlogsContainer'

class User extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>
                <li>
                {user.username}
                <BlogsContainer user={user} />
                </li>
            </div>
        )
    }
}

export default User;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/User/Login';
import User from '../components/User/User';

import { loginUser } from '../actions/userActions';


class Main extends Component {


    render() {
        return(
            <div>
                {this.props.error ? <p>{JSON.stringify(this.props.error).replace(/[{}\[\]"]+/g,"")}</p> : null}
                {this.props.user?.user?.id ?  null: (
                <Login loginUser={this.props.loginUser}/>)}
                <User user={this.props.loginUser} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        error: state.loginError
    }
}




export default connect(mapStateToProps, { loginUser })(Main)
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../actions/userActions';


class Main extends Component {


    render() {
        return(
            <div>
                {this.props.error ? <p>{JSON.stringify(this.props.error)}</p> : null}
                <Login loginUser={this.props.loginUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.loginError
    }
}




export default connect(mapStateToProps, { loginUser })(Main)
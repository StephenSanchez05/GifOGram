import React, {Component} from 'react';


class Login extends Component {
    state ={
        username: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.loginUser({username: this.state.username})
        this.setState({
            username: "",
        })

    }
    render () {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    User Name:&nbsp; &nbsp;             
                    <input type="username" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

export default Login
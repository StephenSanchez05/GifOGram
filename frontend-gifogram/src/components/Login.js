import React, {Component} from 'react';


class Login extends Component {
    state ={
        username: "",
        password: ""

    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.props)
        this.props.loginUser({username: this.state.username, password: this.state.password})
        this.setState({
            username: "",
            password: ""
        })

    }
    render () {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    User Name:&nbsp; &nbsp;             
                    <input type="username" name="username" value={this.state.username} onChange={(event) => this.handleChange(event)} /><br />
                    Password:&nbsp; &nbsp;
                    <input type="password" name="password" value={this.state.password} onChange={(event) => this.handleChange(event)} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

export default Login
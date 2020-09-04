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

    handleSumbit = event => {
        event.preventDefault()
        this.props.loginUser({name: this.state.name, password: this.state.password})
        this.setState({
            username: "",
            password: ""
        })

    }
    render () {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    User Name:&nbsp; &nbsp;             
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                    Password:&nbsp; &nbsp;
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

export default Login
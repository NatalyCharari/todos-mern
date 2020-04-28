import React from 'react';

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.submmitTodo = this.submmitTodo.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handelSignup = this.handelSignup.bind(this)
    }

    submmitTodo(e) {
        e.preventDefault()

        this.props.onLogin(this.state)
        this.setState({ email: '', password: '' })
    }

    handleInput(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handelSignup(e) {
        e.preventDefault()

        this.props.onSignup(this.state)
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.submmitTodo}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleInput}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput} />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn green darken-2">Login</button>
                            <button type="button" style={{ marginLeft: '4px' }} className="btn blue darken-3" onClick={this.handelSignup}>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm
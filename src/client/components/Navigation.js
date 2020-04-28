import React from 'react';

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = { title: props.title }
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout() {
        this.props.onLogout()
    }

    render() {
        return (
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">{this.state.title}</a>
                    { localStorage.getItem('token') &&
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={this.handleLogout}>Logout</a></li>
                        </ul>
                    }
                </div>
            </nav>
        )
    }
}

export default Navigation
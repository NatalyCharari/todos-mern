import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    onSignup({ email, password });
  };

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={handleLogin}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn green darken-2">
              Login
            </button>
            <button
              type="button"
              style={{ marginLeft: '4px' }}
              className="btn blue darken-3"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.defaultProps = {
  onLogin: () => {},
  onSignup: () => {},
};

LoginForm.propTypes = {
  onLogin: PropTypes.func,
  onSignup: PropTypes.func,
};

export default LoginForm;

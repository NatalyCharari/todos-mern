import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ onLogout, appTitle, token, reloadPage }) => {
  const handleLogout = (event) => {
    onLogout();
    reloadPage(event);
  };

  return (
    <nav className="light-blue darken-4">
      <div className="container">
        <a className="brand-logo" href="/">
          {appTitle}
        </a>
        {token && (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

Navigation.defaultProps = {
  onLogout: () => {},
  appTitle: '',
  reloadPage: () => {},
};

Navigation.propTypes = {
  onLogout: PropTypes.func,
  appTitle: PropTypes.string,
  reloadPage: PropTypes.func,
};

export default Navigation;

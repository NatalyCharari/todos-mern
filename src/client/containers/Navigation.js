import React from 'react';
import { connect } from 'react-redux';
import NavigationComponent from '../components/Navigation';

import { removeToken } from '../reducers/actions';

export const NavigationContainer = (props) => {
  return <NavigationComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  appTitle: reduxState.title,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(removeToken),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);

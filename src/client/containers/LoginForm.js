import React from 'react';
import { connect } from 'react-redux';
import LoginFormComponent from '../components/LoginForm';
import { loginUser } from '../reducers/actions';

export const LoginFormContainer = (props) => {
  return <LoginFormComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (user) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);

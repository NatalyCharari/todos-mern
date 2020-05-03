import React from 'react';
import { connect } from 'react-redux';

import { removeToken } from './reducers/actions';

import Navigation from './components/Navigation';
import LoginForm from './containers/LoginForm';
import TodosPage from './containers/TodosPage';
import EditionForm from './containers/EditionForm';
import AddForm from './containers/AddForm';

const App = ({ currentTodo, logout, title, token }) => {
  return (
    <div>
      <Navigation title={title} onLogout={logout} />
      <div className="container">
        {token ? (
          <div className="row">
            <div className="col s4">
              {currentTodo ? <EditionForm /> : <AddForm />}
            </div>
            <div className="col s8">
              <TodosPage />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col s6 offset-m3 center-align">
              <LoginForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ reduxState }) => ({
  currentTodo: reduxState.currentTodo,
  title: reduxState.title,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(removeToken);
    window.location.reload();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

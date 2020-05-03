import React from 'react';
import { connect } from 'react-redux';

import Navigation from './containers/Navigation';
import LoginForm from './containers/LoginForm';
import TodosPage from './containers/TodosPage';
import EditionForm from './containers/EditionForm';
import AddForm from './containers/AddForm';

const App = ({ currentTodo, token }) => {
  const reloadPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div>
      <Navigation reloadPage={reloadPage} />
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
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';

import { removeToken } from './reducers/actions';

import LoginForm from './containers/LoginForm';
import TodosPage from './containers/TodosPage';
import EditionForm from './containers/EditionForm';
import AddForm from './containers/AddForm';

const App = ({ currentTodo, logout, title, token }) => {
  /*constructor(props) {
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
  }*/

  /*removeTodo(id) {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newTodos = this.state.todos.filter((todo) => {
          return todo._id != id;
        });
        localStorage.setItem('todos', JSON.stringify(newTodos));
        this.setState({ todos: newTodos });
      })
      .catch((err) => console.log('err', err));
  }*/

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

import React from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';

import { removeToken, updatedCurrentTodo } from './reducers/actions';

import LoginForm from './containers/LoginForm';
import TodosPage from './containers/TodosPage';

const App = ({ currentTodo, logout, setCurrentTodo, title, token }) => {
  /*constructor(props) {
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
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

  /*editTodo(todo) {
    fetch(`/api/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        M.toast({ html: 'Todo updated' });
        //this.getTodos();
      })
      .catch((err) => console.log('err', err));
  }*/

  /*addTodo(task) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'bearer ' + localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        M.toast({ html: 'Todo saved' });
        //this.getTodos();
      })
      .catch((err) => console.log('err', err));
  }*/

  const showEditForm = (id) => setCurrentTodo(id);

  const showAddForm = () => setCurrentTodo(null);

  return (
    <div>
      <Navigation title={title} onLogout={logout} />
      <div className="container">
        {token ? (
          <div className="row">
            <div className="col s4">
              {currentTodo ? (
                <TodoEditForm
                  todo={currentTodo}
                  onResetForm={showAddForm}
                  //onEdit={this.editTodo}
                />
              ) : (
                <TodoAddForm onAdd={null} />
              )}
            </div>
            <div className="col s8">
              <TodosPage showEditForm={showEditForm} />
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
  setCurrentTodo: (todoIdentifier) =>
    dispatch(updatedCurrentTodo(todoIdentifier)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

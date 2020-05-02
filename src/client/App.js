import React from 'react';
import { connect } from 'react-redux';

import Navigation from './components/Navigation';
import TodoAddForm from './components/TodoAddForm';
import TodoEditForm from './components/TodoEditForm';

import { removeToken } from './reducers/actions';

import LoginForm from './containers/LoginForm';
import TodosPage from './containers/TodosPage';

const App = ({ currentTodo, logout, title, token }) => {
  /*constructor(props) {
    super(props);

    const items = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];

    this.state = {
      title: 'Todo List',
      todos: items,
      currentTest: null,
    };

    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);

    this.showEditForm = this.showEditForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);

    //this.login = this.login.bind(this);
    //this.signup = this.signup.bind(this);
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

  /*showEditForm(id) {
    const todo = this.state.todos.find((todo) => {
      return todo._id == id;
    });
    this.setState({ currentTest: todo });
  }*/

  /*showAddForm() {
    this.setState({ currentTest: null });
  }*/

  /*login(user) {
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ token: data.token });
        //localStorage.setItem('token', data.token);
        //this.getTodos();
      })
      .catch((err) => console.log('err', err));
  }*/

  //logout() {
  //localStorage.clear();
  //this.setState({ token: null });
  //window.location.reload();
  //}

  /*signup(user) {
    fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        //this.getTodos();
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
              {currentTodo ? (
                <TodoEditForm
                //todo={this.state.currentTest}
                //onResetForm={this.showAddForm}
                //onEdit={this.editTodo}
                />
              ) : (
                <TodoAddForm onAdd={null} />
              )}
            </div>
            <div className="col s8">
              <TodosPage showEditForm={null} />
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

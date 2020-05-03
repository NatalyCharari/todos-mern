import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, getTodos, updateCurrentTodo } from '../reducers/actions';
import TodosPageComponent from '../components/TodosPage';

export const TodosPageContainer = (props) => {
  return <TodosPageComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  todos: reduxState.todos,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (todoIdentifier) => dispatch(updateCurrentTodo(todoIdentifier)),
  onRead: (token) => dispatch(getTodos(token)),
  onRemove: (todoIdentifier, token, receiver) => {
    dispatch(deleteTodo(todoIdentifier, token, receiver));
    dispatch(getTodos(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPageContainer);

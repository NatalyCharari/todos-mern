import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../reducers/actions';
import TodosPageComponent from '../components/TodosPage';

export const TodosPageContainer = (props) => {
  return <TodosPageComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  todos: reduxState.todos,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  readTodos: (token) => dispatch(fetchTodos(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPageContainer);

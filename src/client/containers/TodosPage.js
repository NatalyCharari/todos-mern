import React from 'react';
import { connect } from 'react-redux';
import { fetchsTodos } from '../reducers/actions';
import TodosPageComponent from '../components/TodosPage';

export const TodosPageContainer = (props) => {
  return <TodosPageComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  todos: reduxState.todos,
});

const mapDispatchToProps = (dispatch) => ({
  readTodos: (token) => dispatch(fetchsTodos(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosPageContainer);

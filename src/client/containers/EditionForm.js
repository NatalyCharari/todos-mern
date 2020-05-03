import React from 'react';
import { connect } from 'react-redux';
import EditionFormComponent from '../components/EditionForm';
import { getTodos, updateCurrentTodo, updateTodo } from '../reducers/actions';

export const EditionFormContainer = (props) => {
  return <EditionFormComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  currentTodo: reduxState.currentTodo,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (todo, token, receiver) =>
    dispatch(updateTodo(todo, token, receiver)),
  onResetForm: (token) => {
    dispatch(updateCurrentTodo(null));
    dispatch(getTodos(token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditionFormContainer);

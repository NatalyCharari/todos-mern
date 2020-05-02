import React from 'react';
import { connect } from 'react-redux';
import EditionFormComponent from '../components/EditionForm';
import { saveCurrentTodo, onResetForm } from '../reducers/actions';

export const EditionFormContainer = (props) => {
  return <EditionFormComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  currentTodo: reduxState.currentTodo,
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (todo, token, receiver) =>
    dispatch(saveCurrentTodo(todo, token, receiver)),
  onResetForm: (token) => dispatch(onResetForm(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditionFormContainer);

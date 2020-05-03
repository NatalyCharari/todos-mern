import React from 'react';
import { connect } from 'react-redux';
import AddFormComponent from '../components/AddForm';
import { getTodos, updateCurrentTodo, addTodo } from '../reducers/actions';

export const AddFormContainer = (props) => {
  return <AddFormComponent {...props} />;
};

const mapStateToProps = ({ reduxState }) => ({
  token: reduxState.token,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (todo, token, receiver) => dispatch(addTodo(todo, token, receiver)),
  onResetForm: (token) => {
    dispatch(updateCurrentTodo(null));
    dispatch(getTodos(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormContainer);

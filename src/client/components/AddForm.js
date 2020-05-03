import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddForm = ({ onAdd, onResetForm, token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionArea = (e) => {
    setDescription(e.target.value);
  };

  const showToast = () => {
    M.toast({ html: 'Todo added' });
  };

  const addTodo = (event) => {
    event.preventDefault();
    onAdd(
      {
        title,
        description,
      },
      token,
      showToast
    );
    onResetForm(token);
  };

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={addTodo}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="title"
                type="text"
                placeholder="Task title"
                value={title}
                onChange={handleTitleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="description"
                placeholder="Task Description"
                className="materialize-textarea"
                value={description}
                onChange={handleDescriptionArea}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn green darken-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

AddForm.defaultProps = {
  onAdd: () => {},
  onResetForm: () => {},
  token: '',
};

AddForm.propTypes = {
  onAdd: PropTypes.func,
  onResetForm: PropTypes.func,
  token: PropTypes.string,
};

export default AddForm;

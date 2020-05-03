import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const EditionForm = ({ currentTodo, onEdit, onResetForm, token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setDescription(currentTodo.description);
    setTitle(currentTodo.title);
  }, [currentTodo]);

  const showToast = () => {
    M.toast({ html: 'Todo updated' });
  };

  const resetFields = (e) => {
    e.preventDefault();
    onResetForm(token);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    onEdit(
      {
        ...currentTodo,
        title,
        description,
      },
      token,
      showToast
    );
    onResetForm(token);
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionArea = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-content">
        <form onSubmit={updateTodo}>
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
          <div>
            <button type="submit" className="btn green darken-2">
              Update
            </button>
            <button
              type="button"
              style={{ marginLeft: '4px' }}
              className="btn blue darken-3"
              onClick={resetFields}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditionForm.defaultProps = {
  currentTodo: null,
  onEdit: () => {},
  onResetForm: () => {},
  token: '',
};

EditionForm.propTypes = {
  currentTodo: PropTypes.object,
  onEdit: PropTypes.func,
  onResetForm: PropTypes.func,
  token: PropTypes.string,
};

export default EditionForm;

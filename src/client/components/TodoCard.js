import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = ({ onEdit, onRemove, todo }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h5>{todo.title}</h5>
        </div>
        <div className="card-body">
          <p>{todo.description}</p>
        </div>
        <div className="card-footer">
          <div style={{ marginTop: '10%' }}>
            <button className="btn blue darken-3" onClick={onEdit}>
              <i className="material-icons">edit</i>
            </button>
            <button
              className="btn red darken-2"
              style={{ marginLeft: '4px' }}
              onClick={onRemove}
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TodoCard.defaultProps = {
  onEdit: () => {},
  onRemove: () => {},
  todo: {},
};

TodoCard.propTypes = {
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  todo: PropTypes.object,
};

export default TodoCard;

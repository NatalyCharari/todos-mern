import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import TodoCard from './TodoCard';

const TodosPage = ({ onEdit, onRead, onRemove, todos, token }) => {
  useEffect(() => {
    onRead(token);
  }, [onRead, token]);

  const showToast = () => {
    M.toast({ html: 'Todo removed' });
  };

  const renderComponent = () => {
    const cards = todos.map((todo, i) => {
      return (
        <div className="col s6" key={i}>
          <TodoCard
            todo={todo}
            onRemove={() => onRemove(todo._id, token, showToast)}
            onEdit={onEdit}
          />
        </div>
      );
    });

    return <Fragment>{cards}</Fragment>;
  };

  return renderComponent();
};

TodosPage.defaultProps = {
  onEdit: () => {},
  onRead: () => {},
  onRemove: () => {},
  todos: [],
  token: '',
};

TodosPage.propTypes = {
  onEdit: PropTypes.func,
  onRead: PropTypes.func,
  onRemove: PropTypes.func,
  todos: PropTypes.array,
  token: PropTypes.string,
};

export default TodosPage;

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import TodoCard from './TodoCard';

const TodosPage = ({ readTodos, removeTodo, showEditForm, todos, token }) => {
  useEffect(() => {
    readTodos(token);
  }, [readTodos, token]);

  const renderComponent = () => {
    const cards = todos.map((todo, i) => {
      return (
        <div className="col s6" key={i}>
          <TodoCard todo={todo} onRemove={removeTodo} onEdit={showEditForm} />
        </div>
      );
    });

    return <Fragment>{cards}</Fragment>;
  };

  return renderComponent();
};

TodosPage.defaultProps = {
  readTodos: () => {},
  removeTodo: () => {},
  showEditForm: () => {},
  todos: [],
  token: '',
};

TodosPage.propTypes = {
  readTodos: PropTypes.func,
  removeTodo: PropTypes.func,
  showEditForm: PropTypes.func,
  todos: PropTypes.array,
  token: PropTypes.string,
};

export default TodosPage;

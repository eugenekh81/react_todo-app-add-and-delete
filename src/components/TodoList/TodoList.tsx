import React from 'react';
import classnames from 'classnames';
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[],
  removeTodo: CallableFunction,
};

export const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={removeTodo} />
      ))}

      <div
        data-cy="TodoLoader"
        className={classnames(
          'modal', 'overlay',
          { 'is-active': todos.length === 0 },
        )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </section>
  );
};
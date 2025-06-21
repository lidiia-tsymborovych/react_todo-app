/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Todo } from '../../types/Todo';
type Props = {
  todo: Todo;
};

const TodoItemComponent = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const inputRef = useRef<HTMLInputElement>(null);

  const { setTodos } = useTodos();

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(event.target.value);
  };

  const handleToggleCheckBox = () => {
    setTodos(currentTodos =>
      currentTodos.map(currTodo =>
        currTodo.id === todo.id
          ? { ...currTodo, completed: !currTodo.completed }
          : currTodo,
      ),
    );
  };

  const handleRemoveTodo = () => {
    setTodos(currTodos =>
      currTodos.filter(currTodo => currTodo.id !== todo.id),
    );
  };

  const handleSubmitEditing = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.title === updatedTitle.trim()) {
      setIsEditing(false);

      return;
    }

    if (!updatedTitle) {
      handleRemoveTodo();

      return;
    }

    setTodos(currentTodos =>
      currentTodos.map(currentTodo =>
        currentTodo.id === todo.id
          ? { ...currentTodo, title: updatedTitle.trim() }
          : currentTodo,
      ),
    );
    setIsEditing(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setUpdatedTitle(todo.title);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    if (!updatedTitle.trim()) {
      handleRemoveTodo();

      return;
    }

    setTodos(currentTodos =>
      currentTodos.map(currentTodo =>
        currentTodo.id === todo.id
          ? { ...currentTodo, title: updatedTitle.trim() }
          : currentTodo,
      ),
    );
    setIsEditing(false);
  };

  return (
    <div data-cy="Todo" className={cn('todo', { completed: todo.completed })}>
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onChange={handleToggleCheckBox}
        />
      </label>

      {isEditing ? (
        <form onSubmit={handleSubmitEditing}>
          <input
            ref={inputRef}
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            placeholder="Empty todo will be deleted"
            value={updatedTitle}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
          />
        </form>
      ) : (
        <>
          <span
            data-cy="TodoTitle"
            className="todo__title"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>

          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDelete"
            onClick={handleRemoveTodo}
          >
            ×
          </button>
        </>
      )}
    </div>
  );
};

export const TodoItem = React.memo(TodoItemComponent);

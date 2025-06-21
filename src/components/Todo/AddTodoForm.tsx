import React, { useEffect, useRef, useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Todo } from '../../types/Todo';

const AddTodoFormComponent = () => {
  const [title, setTitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { setTodos, todos } = useTodos();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const prevLength = useRef(todos.length);

  useEffect(() => {
    if (todos.length < prevLength.current) {
      inputRef.current?.focus();
    }

    prevLength.current = todos.length;
  }, [todos]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.trimStart());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTodo: Todo = {
      id: +new Date(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos(currTodos => [...currTodos, newTodo]);
    setTitle('');

    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={handleInputChange}
      />
    </form>
  );
};

export const AddTodoForm = React.memo(AddTodoFormComponent);

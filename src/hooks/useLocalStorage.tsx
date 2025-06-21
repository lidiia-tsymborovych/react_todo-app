import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';

export const useLocalStorageTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('todos');

    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos] as const;
};

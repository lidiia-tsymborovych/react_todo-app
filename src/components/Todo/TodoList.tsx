import { useTodos } from '../../hooks/useTodos';
import { TodoItem } from './TodoItem';

import { useFilteredTodos } from '../../hooks/useTodosFilter';

export const TodoList = () => {
  const { todos, filter } = useTodos();

  const visibleTodos = useFilteredTodos(todos, filter);

  if (!visibleTodos.length) {
    return null;
  }

  return (
    <>
      {visibleTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

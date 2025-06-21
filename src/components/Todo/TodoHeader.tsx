import { useTodos } from '../../hooks/useTodos';
import { AddTodoForm } from '../Todo/AddTodoForm';
import { ToggleAllButton } from './ToggleAllButton';

export const TodoHeader = () => {
  const { todos } = useTodos();

  return (
    <header className="todoapp__header">
      {todos.length > 0 && <ToggleAllButton />}

      <AddTodoForm />
    </header>
  );
};

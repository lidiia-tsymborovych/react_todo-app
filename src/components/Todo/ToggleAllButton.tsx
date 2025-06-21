import cn from 'classnames';
import { useTodos } from '../../hooks/useTodos';

export const ToggleAllButton = () => {
  const { setTodos, todos } = useTodos();

  const anyActive = todos.some(todo => !todo.completed);

  const handleToggleAll = () => {
    setTodos(currTodos =>
      currTodos.map(todo => ({ ...todo, completed: anyActive })),
    );
  };

  return (
    <button
      type="button"
      className={cn('todoapp__toggle-all', {
        active: !anyActive && todos.length,
      })}
      data-cy="ToggleAllButton"
      onClick={handleToggleAll}
    />
  );
};

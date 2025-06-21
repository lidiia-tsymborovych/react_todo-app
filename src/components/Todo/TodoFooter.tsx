import { useTodos } from '../../hooks/useTodos';
import { ClearCompletedButton } from './ClearCompletedButton';
import { TodoFooterNav } from './TodoFooterNav';

export const TodoFooter = () => {
  const { todos } = useTodos();
  const activeTodosAmount = todos.filter(todo => !todo.completed).length;
  const anyCompleted = todos.find(todo => todo.completed);

  if (todos.length === 0) {
    return null;
  }

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosAmount} items left
      </span>
      <TodoFooterNav />
      <ClearCompletedButton isDisabled={!anyCompleted} />
    </footer>
  );
};

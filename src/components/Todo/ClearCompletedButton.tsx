import { useTodos } from '../../hooks/useTodos';
type Props = {
  isDisabled: boolean;
};

export const ClearCompletedButton = ({ isDisabled }: Props) => {
  const { setTodos } = useTodos();
  const handleClearCompleted = () => {
    setTodos(currTodos => currTodos.filter(todo => !todo.completed));
  };

  return (
    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      onClick={handleClearCompleted}
      disabled={isDisabled}
    >
      Clear completed
    </button>
  );
};

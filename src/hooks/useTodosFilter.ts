import { Filter, FilterTypes, Todo } from '../types/Todo';

export const useFilteredTodos = (todos: Todo[], filter: Filter): Todo[] => {
  return todos.filter(todo => {
    switch (filter) {
      case FilterTypes.Active:
        return !todo.completed;
      case FilterTypes.Completed:
        return todo.completed;
      default:
        return true;
    }
  });
};

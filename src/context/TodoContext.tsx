import { createContext, useState } from 'react';
import { Filter, FilterTypes, Todo } from '../types/Todo';
import { useLocalStorageTodos } from '../hooks/useLocalStorage';

export interface TodosContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useLocalStorageTodos();
  const [filter, setFilter] = useState<Filter>(FilterTypes.All);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

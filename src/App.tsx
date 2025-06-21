import React from 'react';

import { TodosContextProvider } from './context/TodoContext';
import { TodoHeader } from './components/Todo/TodoHeader';
import { TodoList } from './components/Todo/TodoList';
import { TodoFooter } from './components/Todo/TodoFooter';

export const App: React.FC = () => {
  return (
    <div className="todoapp">
      <TodosContextProvider>
        <h1 className="todoapp__title">todos</h1>

        <div className="todoapp__content">
          <TodoHeader />

          <section className="todoapp__main" data-cy="TodoList">
            <TodoList />
          </section>

          <TodoFooter />
        </div>
      </TodosContextProvider>
    </div>
  );
};

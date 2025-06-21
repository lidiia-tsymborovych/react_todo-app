import cn from 'classnames';
import { useTodos } from '../../hooks/useTodos';
import { FilterTypes } from '../../types/Todo';

export const TodoFooterNav = () => {
  const { filter, setFilter } = useTodos();

  return (
    <nav className="filter" data-cy="Filter">
      {Object.entries(FilterTypes).map(([key, value]) => {
        return (
          <button
            key={value}
            type="button"
            className={cn('filter__link', { selected: value === filter })}
            data-cy={`FilterLink${key}`}
            onClick={() => setFilter(value)}
          >
            {key}
          </button>
        );
      })}
    </nav>
  );
};

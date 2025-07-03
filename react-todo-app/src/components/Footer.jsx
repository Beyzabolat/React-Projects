function Footer({ itemsLeft, filter, onSetFilter, onClearCompleted, hasCompletedTodos }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        {itemsLeft === 1 ? ' item' : ' items'} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === 'all' ? 'selected' : ''}
            onClick={() => onSetFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === 'active' ? 'selected' : ''}
            onClick={() => onSetFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === 'completed' ? 'selected' : ''}
            onClick={() => onSetFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>

      {hasCompletedTodos && (
         <button className="clear-completed" onClick={onClearCompleted}>
            Clear completed
         </button>
      )}
    </footer>
  );
}

export default Footer;
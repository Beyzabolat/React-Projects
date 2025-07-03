function TodoList({ todos, onToggle, onDelete, onToggleAll, allCompleted }) {
  return (
    <section className="main">
      <input 
        id="toggle-all" 
        className="toggle-all" 
        type="checkbox" 
        checked={allCompleted}
        onChange={onToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => onDelete(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
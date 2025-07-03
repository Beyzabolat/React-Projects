import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Have a life!', completed: false },
  ]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  
  const toggleAll = () => {
    const allCompleted = todos.every(todo => todo.completed);
    setTodos(todos.map(todo => ({...todo, completed: !allCompleted})));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return true; // 'all' durumu
  });

  const itemsLeft = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <section className="todoapp">
        <Header onAddTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onToggleAll={toggleAll}
          allCompleted={itemsLeft === 0 && todos.length > 0}
        />
        {todos.length > 0 && (
          <Footer
            itemsLeft={itemsLeft}
            filter={filter}
            onSetFilter={setFilter}
            onClearCompleted={clearCompleted}
            hasCompletedTodos={todos.some(todo => todo.completed)}
          />
        )}
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;
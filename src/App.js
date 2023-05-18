import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';

const App = ({ todos, addTodo, toggleTodo }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  const handleTodoClick = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      <h1>ToDo Application</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { CSSProperties } from '@material-ui/styles';
import { ToDos } from '../../types';

const ToDoList = (todos: ToDos): JSX.Element => {
  const styles = {
    todo: { marginBottom: 15 },
    todoName: { fontSize: 20, fontWeight: 'bold' } as CSSProperties,
    todoDescription: { marginBottom: 0 },
  };

  return (
    <ul>
      {todos.todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
        </div>
      ))}
    </ul>
  );
};

export default ToDoList;

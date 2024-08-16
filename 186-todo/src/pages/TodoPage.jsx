import React, { useState, useEffect } from 'react';
import pb from '@/api/pocketbase';

function TodoPage() {
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    pb.autoCancellation(false);

    async function fetchTodo() {
      try {
        const record = await pb.collection('todolist').getList(1, 5);
        // console.log(record);
        setTodo(record.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching todo:', error.message, error.data);
      }
    }

    fetchTodo();
  }, []);

  return (
    <div className="TodoPage">
      <h1>Todo List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : todo.length > 0 ? (
        <ul>
          {todo.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
}

export default TodoPage;

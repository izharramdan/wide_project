import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => console.error(err));
  }, []);

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="p-4 border rounded w-80 mx-auto text-center">
      <h2 className="text-xl font-bold">Fetched Todo</h2>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
    </div>
  );
}

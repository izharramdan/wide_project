import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal mengambil data");
        setLoading(false);
      });
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

import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal mengambil data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Todo Item</h2>
      {/* <p><span className="font-semibold">ID:</span> {todo.id}</p> */}
      <p><span className="font-semibold">Title:</span> {todo.title}</p>
      <p><span className="font-semibold">Status:</span> {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

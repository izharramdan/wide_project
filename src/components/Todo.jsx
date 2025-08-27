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

  if (loading)
    return (
      <div className="flex items-center justify-center gap-2 text-blue-500 animate-pulse">
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        Loading data...
      </div>
    );
  if (error) return <p className="text-red-500 font-semibold">{error}</p>;

  return (
    <div className="p-6 border-2 border-black rounded-xl w-72 text-center mx-auto shadow-lg mt-8 transition hover:scale-105">
      <h2 className="text-2xl font-extrabold mb-4 text-blue-700 tracking-wide drop-shadow">
        Todo Item
      </h2>
      <div className="mb-3 flex items-center gap-2">
        <span className="font-semibold text-gray-700">Title:</span>
        <span className="italic text-blue-900">{todo.title}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-700">Status:</span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold shadow 
            ${todo.completed
              ? "bg-green-200 text-green-700 border border-green-400 animate-bounce"
              : "bg-yellow-100 text-yellow-700 border border-yellow-400 animate-pulse"
            }`}
        >
          {todo.completed ? "Completed 🎉" : "Not Completed"}
        </span>
      </div>
    </div>
  );
}
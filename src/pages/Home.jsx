import Counter from "../components/Counter";
import Form from "../components/Form";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Home Page</h1>
      <Counter />
      <Form />
      <Todo />
    </div>
  );
}

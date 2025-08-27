import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully");
      setForm({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 border-2 border-black rounded-xl w-full max-w-md mx-auto shadow-lg mt-8 transition hover:scale-105 flex flex-col gap-5 bg-white"
    >
      <h2 className="text-2xl font-extrabold mb-4 text-black tracking-wide drop-shadow">Register</h2>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="name" className="font-medium">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="email" className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="password" className="font-medium">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <button className="px-4 py-2 bg-blue-500 rounded self-end">
        Submit
      </button>
    </form>
  );
}
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
      className="p-6 border-2 border-black rounded-xl w-72 text-center mx-auto shadow-lg mt-8 transition hover:scale-105"
    >
      <h2 className="text-xl font-bold">Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword}</p>
      )}

      <button className="px-4 py-2 bg-blue-500 rounded">
        Submit
      </button>
    </form>
  );
}

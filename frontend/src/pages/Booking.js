import React, { useState } from "react";

function Book() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
  };

  return (
    <div className="container">
      <h1 style={{ marginBottom: "30px" }}>
        Book an Appointment
      </h1>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <textarea
          name="message"
          placeholder="Brief message..."
          rows="4"
          onChange={handleChange}
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button className="btn btn-primary" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Book;
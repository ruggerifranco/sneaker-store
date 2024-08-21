'use client';
import React, { useState } from "react";

const sendMessage = async (values) => {
  console.log({ values });
  const response = await fetch(`http://localhost:3000/api/contacto`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email } = formData;
    let formErrors = { name: "", email: "" };
    let hasErrors = false;

    if (!name.trim()) {
      formErrors.name = "Name is required.";
      hasErrors = true;
    }

    if (!email.trim()) {
      formErrors.email = "Email is required.";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendMessage(formData);
      setFormData({ name: "", email: "" });
      setErrors({ name: "", email: "" });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="contact-form max-w-md mx-auto p-4 border rounded shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">¡Contactanos!</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            disabled={isSubmitting} 
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            disabled={isSubmitting} 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isSubmitting} 
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'} 
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

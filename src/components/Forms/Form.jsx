// ContactForm.js
import React, { useState } from "react";
import "./Form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="form-title">
      <h2>
        Contact one of our representatives to assist you. <br /> Our team will
        be happy to carefully analyze your request to come up with a proposal
        according to your need.
      </h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>
            First name<span className="required">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
          />

          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Company name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <label>
            Message<span className="required">*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

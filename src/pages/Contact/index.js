import { useState } from "react";

import emailjs from "emailjs-com";

import { ContractContainer, Form, H2, ContactItems } from "./ContactElements";

import { contactData } from "../../utils/data";

export default function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFormData = (formData) => {
    const formErrors = {
      name: !formData.name ? "Name is required" : "",
      email: !formData.email
        ? "Email is required"
        : !isValidEmail(formData.email)
        ? "Invalid email address"
        : "",
      message:
        !formData.message || formData.message.length < 10
          ? "Message is too short"
          : "",
    };
    return formErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const errors = validateFormData(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      e.target.reset();
    }
  }

  return (
    <ContractContainer id="Contact">
      <Form onSubmit={handleSubmit}>
        <H2>Contact</H2>
        {contactData.map(({ id, name, type, label, rows }) => (
          <ContactItems key={id} showError={Boolean(errors[name])}>
            {id === 3 ? (
              <textarea
                showError={Boolean(errors[name])}
                rows={rows}
                name={name}
              />
            ) : (
              <input type={type} name={name} />
            )}

            {errors[name] && <span>{errors[name]}</span>}
            <label>{label}</label>
          </ContactItems>
        ))}
        <button>Submit</button>
      </Form>
    </ContractContainer>
  );
}

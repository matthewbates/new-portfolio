import { useState } from "react";

import emailjs from "emailjs-com";
import swal from "sweetalert2";

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

  const SERVICE_ID = "service_7j2rpfd";
  const TEMPLATE_ID = "template_bl3e1rq";
  const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

  const validateFormData = (formData) => {
    const formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message || formData.message.length < 10) {
      formErrors.message = "Message is too short";
    }

    return formErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    setErrors(validateFormData(formData));

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (r) => {
          alert("Email sent! Matthew will get back to you shortly.");
        },
        (error) => {
          alert(error);
        }
      );
      e.target.reset();
    }
  }

  return (
    <ContractContainer id="Contact">
      <Form onSubmit={handleSubmit}>
        <H2>
          Contact <div></div>
        </H2>
        {contactData.map(({ id, name, type, label, rows }) => (
          <ContactItems key={id} $showError={Boolean(errors[name])}>
            {id === 3 ? (
              <textarea
                $showError={Boolean(errors[name])}
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
        <button type="submit">Submit</button>
      </Form>
    </ContractContainer>
  );
}

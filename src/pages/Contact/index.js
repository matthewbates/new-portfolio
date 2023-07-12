import { useState } from "react";

import {
  ContactContainer,
  H2,
  Form,
  Input,
  Value,
  SubmitBtn,
} from "./ContactElements";

export default function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactContainer id="Contact">
      <H2>Contact</H2>
      <Form onSubmit={handleSubmit}>
        <Value />
        <Input type="text" />
        <Value />
        <Input tyle="email" />
        <Value />
        <Input type="text" />
        <Value />
        <Input type="message" rows="6" />
      </Form>
    </ContactContainer>
  );
}

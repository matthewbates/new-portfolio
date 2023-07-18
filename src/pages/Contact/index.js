// import "./contact.css";

import { useState } from "react";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

import { ContractContainer, Form, H2, ContactItems } from "./ContactElements";

export default function Contact() {
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContractContainer id="Contact">
      <Form onSubmit={handleSubmit}>
        <H2>Contact</H2>
        <ContactItems className="user-box">
          <input type="text" />
          <label>Username</label>
        </ContactItems>
        <ContactItems className="user-box">
          <input type="email" />
          <label>Password</label>
        </ContactItems>
        <ContactItems>
          <input type="message" />
          <label>Message</label>
        </ContactItems>
        <button>Submit</button>
      </Form>
    </ContractContainer>
  );
}

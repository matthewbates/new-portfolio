import { Fragment, useState } from "react";
import { contact } from "../../utils/data";

import { ContactContainer, Form, H2, Label, Input } from "./ContactElements";

export default function Contact() {
  return (
    <ContactContainer id="Contact">
      <H2>Contact</H2>
      <Form>
        {contact.map(({ id, name, type, row }, index) => (
          <Fragment key={id}>
            <Label>{name[0].toLocaleUpperCase() + name.slice(1)}</Label>
            <Input type={type} />
          </Fragment>
        ))}
      </Form>
    </ContactContainer>
  );
}

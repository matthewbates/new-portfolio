import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  height: 100vh;
  background: ${CONSTANTS.colors.royalBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${CONSTANTS.colors.offWhite};
`;

export const H2 = styled.h2`
  text-align: center;
  margin: 2em 0 2em 0;
  font-family: ${CONSTANTS.styles.arial};
  color: ${CONSTANTS.colors.offWhite};
  text-transform: uppercase;
  text-decoration: underline;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  margin-top: 1em;
  font-family: ${CONSTANTS.styles.arial};
  color: ${CONSTANTS.colors.offWhite};
`;

export const Input = styled.input`
  padding: 0.75em;
  border-radius: 8px;
`;

export const SubmitBtn = styled.button`
  /* Your button styles here */
`;

import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContractContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${CONSTANTS.colors.offWhite};
  height: 100vh;
  background: ${CONSTANTS.colors.royalBlue};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 2.5em;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-family: "Arial";

  button {
    display: flex;
    margin: auto;
    padding: 1em;
    border: none;
    background: ${CONSTANTS.colors.offWhite};
    color: ${CONSTANTS.colors.offBlack};
    border: 4px solid ${CONSTANTS.colors.spaceGreen};
    cursor: pointer;
    font-weight: bold;
  }

  @media screen and (min-width: 820px) {
    max-width: 500px;
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Arial";
  color: ${CONSTANTS.colors.offWhite};
  text-transform: uppercase;
  margin: 2em 0 2em 0;
  text-decoration: underline;
`;

export const ContactItems = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: ${CONSTANTS.colors.offWhite};
    margin-bottom: 2.5em;
    border: none;
    border-bottom: 1px solid ${CONSTANTS.colors.offWhite};
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    -webkit-transition: 0.3s ease-in-out;
  }

  input:focus ~ label {
    top: -20px;
    left: 0;
    color: ${CONSTANTS.colors.spaceGreen};
    font-size: 12px;
  }
`;

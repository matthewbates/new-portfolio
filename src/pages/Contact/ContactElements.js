import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContractContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${CONSTANTS.colors.offWhite};
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 450px;
  padding: 3em;
  background: ${({ theme }) =>
    theme === "light" ? "rbga(0, 0,0, 0.5)" : `${CONSTANTS.colors.gray_2}`};
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px 8px;
  border-radius: 10px;
  font-family: "Arial";
  margin-top: 10%;
  margin-bottom: 10%;

  @media screen and (min-width: 820px) {
    max-width: 500px;
  }

  button {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 1em;
    padding: 1em;
    width: 40%;
    border: none;
    background: ${({ theme }) =>
      theme === "light"
        ? `${CONSTANTS.colors.spaceGreen}`
        : `${CONSTANTS.colors.gray_1}`};
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    outline: ${({ theme }) =>
      theme === "light"
        ? `2px solid ${CONSTANTS.colors.spaceGreen}`
        : `2px solid ${CONSTANTS.colors.gray_1}`};
    -webkit-transition: 0.1s linear;
    text-transform: uppercase;

    &:hover {
      outline-offset: 4px;
    }
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  color: ${CONSTANTS.colors.offWhite};
  text-transform: uppercase;
  font-family: "Open Sans";
  letter-spacing: 0.1em;

  font-size: 40px;

  div {
    display: flex;
    margin: 0.5em auto;
    width: 70px;
    background: white;
    height: 4px;
    margin-bottom: 1em;
  }
`;

export const ContactItems = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px 0;
    font-size: 1em;
    color: ${CONSTANTS.colors.offWhite};
    margin-bottom: ${(props) => (props.showError ? "0.5em" : "2em")};
    border: none;
    -webkit-border-radius: 0px;
    border-bottom: 1px solid
      ${({ showError }) =>
        showError
          ? `${CONSTANTS.colors.errorRed}`
          : `${CONSTANTS.colors.offWhite}`};
    outline: none;
    background: transparent;
    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px transparent inset;
    }
  }

  textarea {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    background: transparent;
    resize: none;
    padding: 8px;
    font-family: ${CONSTANTS.styles.arial};
    border: 1px solid
      ${({ showError }) =>
        showError
          ? `${CONSTANTS.colors.errorRed}`
          : `${CONSTANTS.colors.offWhite}`};
    ${CONSTANTS.colors.offWhite};
    color: ${CONSTANTS.colors.offWhite};
    font-size: 16px;
    margin-top: 1em;
    margin-bottom: 0.5em;

    &:focus {
      outline: none;
    }
  }

  span {
    color: ${CONSTANTS.colors.errorRed};
    display: block;
    margin-bottom: ${({ showError }) => (showError ? "2em" : "4em")};
    font-size: 12px;
  }

  label {
    position: absolute;
    top: -10px;
    left: 0;
    color: ${({ theme }) =>
      theme === "light"
        ? `${CONSTANTS.colors.spaceGreen}`
        : `${CONSTANTS.colors.gray_1}`};
    font-size: 12px;
  }
`;

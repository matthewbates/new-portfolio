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
  width: 95%;
  padding: 2.5em;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  font-family: "Arial";

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
    background: ${CONSTANTS.colors.spaceGreen};
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    outline: 2px solid ${CONSTANTS.colors.spaceGreen};
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
  font-family: "Arial";
  color: ${CONSTANTS.colors.offWhite};
  text-transform: uppercase;
  margin: 1em 0 1em 0;
  text-decoration: underline;
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

  /* input:focus ~ label {
    top: -20px;
    left: 0;
    color: ${CONSTANTS.colors.spaceGreen};
    font-size: 12px;
  } */

  span {
    color: ${CONSTANTS.colors.errorRed};
    display: block;
    margin-bottom: ${({ showError }) => (showError ? "2em" : "4em")};
    font-size: 12px;
  }

  label {
    /* position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    -webkit-transition: 0.3s ease-in-out; */
    position: absolute;
    top: -10px;
    left: 0;
    color: ${CONSTANTS.colors.spaceGreen};
    font-size: 12px;
  }
`;

import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const Btn = styled.button`
  background: transparent;
  color: ${CONSTANTS.colors.offWhite};
  border: none;
  cursor: pointer;
  border: 1px solid ${CONSTANTS.colors.spaceGreen};
  margin-right: ${({ sidebar }) => (sidebar === "false" ? "1em" : "0")};
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  font-family: ${CONSTANTS.styles.arial};
  text-transform: uppercase;
  cursor: pointer;
  padding: ${({ sidebar }) => (sidebar === "true" ? "1em" : "0.5em")};

  &:hover {
    transform: translate(2px, -2px);
    transition: ${CONSTANTS.styles.hover};
    box-shadow: ${CONSTANTS.styles.boxShadow};
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

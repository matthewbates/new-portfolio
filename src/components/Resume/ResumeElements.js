import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const Btn = styled.button`
  background: transparent;
  color: ${CONSTANTS.colors.offWhite};
  cursor: pointer;
  border: 2px solid ${CONSTANTS.colors.spaceGreen};
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  justify-content: center;
  font-family: ${CONSTANTS.styles.arial};
  text-transform: uppercase;
  cursor: pointer;
  padding: ${({ sidebar }) => (sidebar === "true" ? "1em" : "1em")};
  margin: auto;
  margin-right: ${({ sidebar }) => (sidebar === "false" ? "1em" : "none")};

  &:hover {
    transform: translate(2px, -2px);
    transition: ${CONSTANTS.styles.hover};
    box-shadow: ${CONSTANTS.styles.boxShadow};
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

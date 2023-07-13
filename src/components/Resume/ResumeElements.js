import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const BtnContainer = styled.div`
  border: 1px solid ${CONSTANTS.colors.spaceGreen};
  color: ${CONSTANTS.colors.offWhite};
  padding: 1em;
  margin-right: ${({ sidebar }) => (sidebar === "false" ? "1em" : "0")};
  display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")};
  cursor: pointer;
  font-family: ${CONSTANTS.styles.arial};
  text-transform: uppercase;

  &:hover {
    transform: translate(2px, -2px);
    transition: ${CONSTANTS.styles.hover};
    box-shadow: ${CONSTANTS.styles.boxShadow};
  }

  @media screen and (min-width: 820px) {
    display: flex;
  }
`;

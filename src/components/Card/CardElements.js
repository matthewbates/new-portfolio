import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 0.5em;
  cursor: pointer;
  background: ${CONSTANTS.colors.offWhite};

  &:hover {
    transform: translate(2px, -2px);
    transition: 0.3s ease-in-out;
    box-shadow: ${CONSTANTS.styles.boxShadow};
  }
`;

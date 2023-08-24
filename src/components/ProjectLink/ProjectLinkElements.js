import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const LinkWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 5em;
  color: ${CONSTANTS.colors.offWhite};
  gap: 1em;
  margin-top: 1em;
  transition: 0.3s ease-in-out;

  a {
    &:first-child {
      width: 5em;
      color: ${({ $github }) =>
        $github === "false" ? "gray" : `${CONSTANTS.colors.offWhite}`};
      cursor: ${({ $github }) => $github !== "false" && "pointer"};

      &:hover {
        -webkit-transition: 0.3s ease-in-out;
        color: ${({ $github }) =>
          $github !== "false" && `${CONSTANTS.colors.spaceGreen}`};
      }
    }

    &:last-child {
      width: 5em;
      color: ${({ $link }) =>
        $link === "false" ? "gray" : `${CONSTANTS.colors.offWhite}`};
      cursor: ${({ $link }) => $link !== "false" && "pointer"};

      &:hover {
        -webkit-transition: 0.3s ease-in-out;
        color: ${({ $link }) =>
          $link === "false" ? "gray" : `${CONSTANTS.colors.spaceGreen}`};
      }
  }
`;

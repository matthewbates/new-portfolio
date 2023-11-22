import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  /* display: ${({ sidebar }) => (sidebar === "true" ? "flex" : "none")}; */
  position: fixed;
  top: 100px;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offBlack}`
      : `${CONSTANTS.colors.gray_3}`};
  transition: 0.3s ease-out;
`;

export const SidebarItems = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
`;

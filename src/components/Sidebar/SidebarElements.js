import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 100px;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light" ? `${CONSTANTS.colors.offBlack}` : "#22272e"};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  max-height: ${({ $isOpen }) => ($isOpen ? "520px" : "0")};
  transition: 0.3s ease;
`;

export const SidebarWrapper = styled.div`
  transition: 0.3s ease;
`;

export const SidebarItems = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
`;

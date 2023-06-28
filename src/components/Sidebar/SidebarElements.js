import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: ${CONSTANTS.colors.offWhite};
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: 100vh;
  width: 50vw;
  transition: 0.3s ease-in-out;
  border-right: 1px solid ${CONSTANTS.colors.offBlack};
  z-index: 997;
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1em;
`;

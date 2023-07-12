import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  position: fixed;
  background: ${CONSTANTS.styles.sidebar};
  top: 80px;
  right: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: ${CONSTANTS.styles.height};
  width: 50vw;
  transition: 0.3s ease-in-out;
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2em;
`;

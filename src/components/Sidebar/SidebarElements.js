import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  /* position: fixed;
  background: ${CONSTANTS.styles.sidebar};
  top: 80px;
  right: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: ${CONSTANTS.styles.height};
  width: 50vw;
  transition: 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  background: ${CONSTANTS.styles.sidebar};
  transition: top 0.3s ease-out, height 0.3s ease-out;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 998;
`;

export const SidebarItems = styled.div`
  /* display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -k50%);
  gap: 1.5em; */
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  height: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: "Raleway";
  gap: 1em;
  font-size: 12px;
  text-align: right;
  padding: 1.5em;
`;

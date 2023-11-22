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
  top: 100px;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offBlack}`
      : `${CONSTANTS.colors.gray_3}`};
  height: ${({ $isOpen }) => ($isOpen ? "auto" : 0)};
  transition: 0.3s ease-out;
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
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  /* height: 100%; */
  flex-direction: column;
  justify-content: center;
  font-family: "Raleway";
  font-size: 0.9em;`;

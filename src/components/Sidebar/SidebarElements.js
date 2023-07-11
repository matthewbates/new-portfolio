import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 80px;
  right: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: 100vh;
  width: 50vw;
  transition: 0.3s ease-in-out;
`;

export const Img = styled.img`
  /* display: flex;
  margin: auto; */
  margin-top: 3rem;
  border-radius: 50%;
  max-height: 200px;
  max-width: 200px;
  filter: none;
  transition: 0.3s;
  cursor: pointer;
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

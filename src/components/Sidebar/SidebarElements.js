import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: 100vh;
  width: 50vw;
  transition: 0.3s ease-in-out;
  border-right: 1px solid ${CONSTANTS.colors.offBlack};
`;

export const Img = styled.img`
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  max-height: 200px;
  max-width: 200px;
  filter: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: grayscale(75%);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const SidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1em;
  margin-top: 25%;
`;

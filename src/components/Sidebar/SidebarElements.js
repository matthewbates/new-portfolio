import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  //! <Sidebar /> === LEFT

  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  height: 100vh;
  width: 50vw;
  transition: 0.3s ease-in-out;
  border-right: 1px solid ${CONSTANTS.colors.offBlack};
  //! <Sidebar /> === TOP
  /* position: fixed;
  width: 100%;
  height: 30%;
  top: 60px;
  left: 0;
  background: #0d0d0d;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  -webkit-transition: 0.3s ease-in-out;
  border-bottom: 1px solid #f1f2f2; */
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
  //! <Sidebar /> === LEFT
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 1em;

  //! <Sidebar /> === TOP
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

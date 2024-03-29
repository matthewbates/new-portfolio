import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const NavbarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  background: ${({ theme }) =>
    theme === "light" ? `${CONSTANTS.colors.royalBlue}` : "#22272e"};
  height: 100px;
  align-items: center;
  border-bottom: ${({ theme }) =>
    theme === "light"
      ? `1px solid ${CONSTANTS.colors.offWhite}`
      : `1px solid ${CONSTANTS.colors.gray_4}`};
  font-size: 14px;
  top: ${({ $scrollDirection }) =>
    $scrollDirection === "down" ? "-150px" : 0};
  position: sticky;
  z-index: 999;
  transition: 0.3s ease;
`;

export const BurgerWrapper = styled.div`
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

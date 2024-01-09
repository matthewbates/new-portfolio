import { TypeSpecimenOutlined } from "@mui/icons-material";
import styled from "styled-components";

import CONSTANTS from "../../utils/constants";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 100px;
  width: 100%;
  background: ${({ theme }) =>
    theme === "light"
      ? `${CONSTANTS.colors.offBlack}`
      : // : `${CONSTANTS.colors.gray_3}`};
        "#22272e"};
`;

export const SidebarWrapper = styled.div`
  height: ${({ $linkRef }) => $linkRef && `${$linkRef.current.scrollHeight}`};
  transition: 0.3s ease;
`;

export const SidebarItems = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  font-size: 0.9em;
`;

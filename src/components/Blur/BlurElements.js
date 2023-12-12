import styled from "styled-components";

export const BlurContainer = styled.div`
  background: ${({ isOpen }) => isOpen === true && "rgba(0,0,0,0.8)"};
  backdrop-filter: ${({ isOpen }) => isOpen === true && "blur(5px)"};
  color: red;
`;

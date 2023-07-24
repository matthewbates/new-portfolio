import styled from "styled-components";

export const FooterIconContainer = styled.div`
  display: flex;

  a {
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    height: 2em;
  }
`;

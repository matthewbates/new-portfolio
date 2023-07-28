import styled from "styled-components";

export const FooterIconContainer = styled.div`
  display: flex;

  a {
    mix-blend-mode: color-burn;
    transition: 0.3s ease-in-out;
    &:hover {
      /* transform: scale(1.1); */
      transform: translateY(-4px);
    }
  }

  img {
    object-fit: contain;
    height: 2.2em;
  }
`;

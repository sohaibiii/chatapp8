import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-self: flex-end;
`;

export const Dialog = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const GifButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.importantText};
  svg {
    vertical-align: top;
  }
`;

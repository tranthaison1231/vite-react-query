import styled from '@emotion/styled';

export type OverlayProps = {
  show?: boolean;
  zIndex?: number;
  bg?: string;
};

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ bg }) => bg};
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.6 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? 'initial' : 'none')};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
  bg: '#452a7a',
};

export default Overlay;

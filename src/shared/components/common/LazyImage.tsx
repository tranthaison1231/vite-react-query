import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef } from 'react';
import LazyLoad from 'react-lazyload';

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  animation: ${loadingAnimation} 1s infinite;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: Props) => {
  const refPlaceholder = useRef<HTMLDivElement | null>(null);
  const removePlaceholder = () => refPlaceholder?.current?.remove();
  return (
    <ImageWrapper className={String(className)}>
      <Placeholder ref={refPlaceholder} className="absolute inset-0" />
      <LazyLoad>
        <img
          className="inset-0 absolute w-full h-full object-cover"
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;

import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .range {
    overflow: hidden;
    max-width: 100vw;
    height: 484px;
    background: ${({ theme }) => theme.colors.bg_blue};
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  input {
    display: block;
    margin: 2rem auto;
    -webkit-appearance: none;
    width: 300px;
    background: transparent;
    margin-top: 5rem;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background: ${({ theme }) => theme.colors.range_thumb_yellow};
      cursor: pointer;
      margin-top: -14px;
    }
    &::-moz-range-thumb {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background: ${({ theme }) => theme.colors.range_thumb_yellow};
      cursor: pointer;
      border: none;
    }
    &::-ms-thumb {
      height: 50px;
      width: 50px;
      border-radius: 25px;
      background: ${({ theme }) => theme.colors.range_thumb_yellow};
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 18px;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.range_path_yellow};
      border-radius: 9px;
    }
    ::-moz-range-track {
      width: 100%;
      height: 18px;
      cursor: pointer;
      background: ${({ theme }) => theme.colors.range_path_yellow};
      border-radius: 9px;
    }
  }
`;

const SliderSection = () => {
  const [position, setPosition] = useState(0);

  return (
    <Container>
      <div className="range">
        <img
          src="/img/09.png"
          alt="kids09"
          style={{
            transform: `translateX(${-position}px)`,
          }}
        />
      </div>
      <input
        type="range"
        min="0"
        max={2736 - window.innerWidth}
        value={position}
        step="1"
        onChange={(e) => setPosition(e.target.value)}
      />
    </Container>
  );
};

export default SliderSection;

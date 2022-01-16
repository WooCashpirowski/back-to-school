import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  height: 120vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  .rectangle {
    background: ${({ theme }) => theme.colors.bg_blue};
    &.vertical {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 1;
      grid-row-end: 5;
    }
    &.horizontal {
      grid-column-start: 2;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 4;
    }
  }
  .images {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 4;
    display: flex;
    img {
      width: 50%;
      height: 100%;
      object-position: top;
      object-fit: cover;
    }
  }
`;

const SectionFour = () => {
  return (
    <Container>
      <div className="rectangle vertical"></div>
      <div className="rectangle horizontal"></div>
      <div className="images">
        <img src="/img/07.png" alt="kids 07" />
        <img src="/img/08.png" alt="kids 08" />
      </div>
    </Container>
  );
};

export default SectionFour;

import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Container = styled.section`
  padding: 5rem 4rem 3rem;
  position: relative;
  div:first-of-type {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: ${({ theme }) => theme.colors.bg_blue};
    z-index: -1;
  }
  img:first-of-type {
    position: absolute;
    top: 31.7%;
    left: 25rem;
    z-index: -1;
  }
  div:last-of-type {
    position: absolute;
    top: 31%;
    left: 48rem;
    width: 300px;
    font-size: 1.5rem;
  }
  img:last-child {
    z-index: 2;
  }
`;

const SectionTwo = () => {
  return (
    <Container>
      <div className="bg" />
      <img src="/img/grille.svg" alt="grille" />
      <div data-aos="fade-left">
        <p>Powrót do szkoły jeszcze nigdy nie był tak ekscytujący!</p>
      </div>
      <img src="/img/03.png" alt="kids03" />
    </Container>
  );
};

export default SectionTwo;

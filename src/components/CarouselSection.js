import React from 'react';
import styled from 'styled-components';
import { Carousel } from './Carousel';

const Container = styled.section`
  display: flex;
  min-height: 100vh;
  position: relative;
  .number {
    position: absolute;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 7rem;
    cursor: pointer;
    &:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
    }
  }
  .number.one {
    bottom: 0;
    right: 10%;
  }
  .number.two {
    top: -3.25rem;
    right: 10%;
  }
  .number.seven {
    top: 15%;
    left: 0;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Head = styled.div`
  font-size: 1.5rem;
  padding: 2rem 6rem;
`;
const Flex = styled.div`
  display: flex;
  margin: 2rem auto;
  div {
    width: 200px;
    margin: 0 2rem;
    &:last-child {
      margin-top: 5rem;
    }
  }
`;
const Feature = styled.div`
  width: 300px;
  margin: 0 auto;
  h4 {
    position: relative;
    margin-bottom: 1rem;
    &::before {
      position: absolute;
      content: '';
      background: ${({ theme }) => theme.colors.mark_yellow};
      width: 165px;
      height: 13.5px;
      z-index: -1;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const CarouselSection = () => {
  return (
    <Container>
      <Carousel />
      <Content>
        <Head>
          <p>
            Nowy rok szkolny to nowe znajomości, nowe umiejętności i nowe
            przygody! A te wymagają ubrań do zadań specjalnych, które są:
          </p>
        </Head>
        <Flex>
          <Feature>
            <h4>DOPASOWANE</h4>
            <p>przede wszytskim do osobowości</p>
          </Feature>
          <Feature>
            <h4>WYGODNE</h4>
            <p>w szkolnej ławce, na przerwie i na boisku</p>
          </Feature>
        </Flex>
        <Feature>
          <h4>WYTRZYMAŁE</h4>
          <p>
            przetrwają zarówno obóz sportowy, jak i eksperymenty na lekcji
            chemii
          </p>
        </Feature>
      </Content>
      <span className="number one">1</span>
      <span className="number two">2</span>
      <span className="number seven">7</span>
    </Container>
  );
};

export default CarouselSection;

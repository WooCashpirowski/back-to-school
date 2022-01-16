import React from 'react';
import styled from 'styled-components';
import 'animate.css';
import Buttons from './Buttons';

const Container = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.bg_blue};
  height: 100vh;
  .image {
    flex: 1;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`;

const Info = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .heading {
    width: 80%;
    margin: 0 auto;
    position: relative;
    color: ${({ theme }) => theme.colors.mark_yellow};
    margin-top: 30%;
    img {
      width: 100%;
    }
    h1 {
      position: absolute;
      top: 40%;
      left: -1.75rem;
      transform: translateY(-45%);
      font-size: 6rem;
      font-weight: 500;
      line-height: 5.5rem;
    }
  }
`;

const HeroSection = () => {
  return (
    <Container>
      <div className="image">
        <img src="/img/01.png" alt="kids01" />
      </div>
      <Info>
        <div className="heading animate__animated animate__bounceInDown">
          <img src="/img/grille.svg" alt="grille" />
          <h1>
            Back to <br /> school
          </h1>
        </div>
        <Buttons />
      </Info>
      <div className="image">
        <img src="/img/02.png" alt="kids02" />
      </div>
    </Container>
  );
};

export default HeroSection;

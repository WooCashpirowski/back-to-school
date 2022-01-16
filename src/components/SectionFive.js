import React from 'react';
import styled from 'styled-components';
import BlackBoard from './BlackBoard';
import Buttons from './Buttons';

const Container = styled.section`
  padding: 4rem;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.bg_blue};
  width: 100%;
  height: 80%;
  bottom: 0;
  left: 0;
  z-index: -2;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  div {
    &:first-child {
      flex: 1;
      img {
        width: 100%;
      }
      h1 {
        font-size: 3.5rem;
        text-align: center;
        padding: 5rem 2rem 0;
        color: ${({ theme }) => theme.colors.mark_yellow};
      }
    }
    &:last-child {
      flex: 1;
      position: relative;
      padding: 4rem;
      text-align: center;
      .grille {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
      }
      .photo {
        width: 85%;
        object-fit: cover;
      }
    }
  }
`;

const SectionFive = () => {
  return (
    <Container>
      <Background />
      <ContentWrapper>
        <img src="/img/10.png" alt="kids 10" />
        <Flex>
          <div>
            <img src="/img/11.png" alt="kids 11" />
            <h1>Zobacz nową kolekcję</h1>
            <Buttons />
          </div>
          <div>
            <img className="grille" src="/img/grille.svg" alt="grille" />
            <img className="photo" src="/img/12.png" alt="kids 12" />
          </div>
        </Flex>
        <BlackBoard />
      </ContentWrapper>
    </Container>
  );
};

export default SectionFive;

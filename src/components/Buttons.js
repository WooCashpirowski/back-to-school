import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  width: 260px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
  background: ${({ theme }) => theme.colors.button_dark};
  border: none;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.mark_yellow};
    color: ${({ theme }) => theme.colors.button_dark};
  }
`;

const Buttons = () => {
  return (
    <Wrapper>
      <Button>kolekcja dziewczęca</Button>
      <Button>kolekcja chłopięca</Button>
    </Wrapper>
  );
};

export default Buttons;

import React from 'react';
import styled from 'styled-components';
import { h2, basicBTN } from './MyStyle';

const Title = h2;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const MyButton = styled(basicBTN)``;

const TomatoButton = styled(basicBTN)`
  color: #fff;
  background-color: tomato;
`;


export default function StyleComponent() {
  return (
    <Wrapper>
      <Title>lorem2, Hello world, lslalslaldaldsladsl</Title>
      <MyButton main>Main button</MyButton>
      <MyButton>A button</MyButton>
      <TomatoButton>A tomato button</TomatoButton>
    </Wrapper>
  );
}
  
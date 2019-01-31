
import React from 'react';
import styled from 'styled-components';

export const h2 = styled.h2`
font-size: 1.5em;
text-align: center;
color: #345;
`;

export const basicBTN = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: ${props => props.main ? "#222" : "#fff"};
  color: ${props => props.main ? "#fff" : "#222"};
  transition: .3s;

  :hover {
    opacity: 0.7;
    transition: .3s;
  }
`;




// export { h2 };
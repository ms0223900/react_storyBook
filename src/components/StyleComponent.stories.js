import React from 'react';
// import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import  StyleComponent from './StyleComponent';


storiesOf('title', StyleComponent)
  .add('normal title', () => <StyleComponent />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import  { MaterialUI } from './materialUI';

storiesOf('MaterailUI', MaterialUI)
  .add('normal title', () => <MaterialUI />);
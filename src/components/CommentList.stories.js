import React from 'react';
import { storiesOf } from '@storybook/react'

import CommentList from './CommentList';

storiesOf('CommentList', CommentList)
  .add('HasData', () => (
    <CommentList comments={testComments.slice(0,3)} />
  ))
  .add('Paginated', () => <CommentList comments={testComments} totalCount={10}/>)
  .add('Loading', () => <CommentList loading={true}/>)
  .add('Empty', () => <CommentList comments={[]}/>)


  const testComments = [
    {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: {
    name: 'Luke',
    avatar: 'luke.jpg',
    },
    },
    {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    author: {
    name: 'Leah',
    avatar: 'leah.jpg',
    },
    },
    {
    text: 'Duis aute irure dolor in reprehenderit in voluptate.',
    author: {
    name: 'Han',
    avatar: 'han.jpg',
    },
    },
    // Additional tests truncated for brevity
   ];
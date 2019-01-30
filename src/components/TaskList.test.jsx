import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import TaskList from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  const taskList = shallow(<TaskList tasks={withPinnedTasks} {...events} />);

  const lastTaskInput = taskList.find('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);
});
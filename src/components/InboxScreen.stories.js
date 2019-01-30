import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';
import { defaultTasks } from './TaskList.stories';
import { withKnobs, object } from '@storybook/addon-knobs/react';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    console.log(defaultTasks)
    return {
      tasks: defaultTasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(withKnobs)
  .add('default', () => <PureInboxScreen tasks={object('tasks', defaultTasks)}/>)
  .add('error', () => <PureInboxScreen error="Something" />);
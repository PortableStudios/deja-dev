import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';

import Home from './Home';

export default {
  title: 'Pages',
  component: Home,
  decorators: [withKnobs],
  parameters: {
    screenshot: {
      skip: false,
    },
  },
};

const defaultTimestamp = new Date().getTime();

export const HomeStory = () => {
  const timestamp = number('UTC Timestamp', defaultTimestamp);
  return <Home timestamp={timestamp} />;
};
HomeStory.story = { name: 'Home' };

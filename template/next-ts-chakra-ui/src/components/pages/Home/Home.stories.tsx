import React from 'react';

import Home from './Home';

export default {
  title: 'Pages',
  component: Home,
  parameters: {
    screenshot: {
      skip: false,
    },
  },
};

export const HomeStory = () => {
  return <Home />;
};
HomeStory.story = { name: 'Home' };

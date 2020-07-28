import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import AppProvider from '@/components/AppProvider';

export const render = (ui: React.ReactNode) => {
  return {
    ...rtlRender(<AppProvider>{ui}</AppProvider>),
  };
};

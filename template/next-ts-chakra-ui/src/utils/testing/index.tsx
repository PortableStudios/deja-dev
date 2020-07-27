import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import Provider from '@/components/Provider';

export const render = (ui: React.ReactNode) => {
  return {
    ...rtlRender(<Provider>{ui}</Provider>),
  };
};

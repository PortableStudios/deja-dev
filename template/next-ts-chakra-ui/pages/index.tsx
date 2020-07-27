import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import { Home } from '@/components/pages';
import generateMetaTags from '@/utils/meta';

const Index: NextPage = () => {
  return (
    <>
      <Head>{generateMetaTags({ title: 'Home' })}</Head>
      <Home />
    </>
  );
};

export default Index;

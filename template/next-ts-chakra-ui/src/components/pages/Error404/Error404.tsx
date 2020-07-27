import React from 'react';
import NextLink from 'next/link';
import { Heading, Stack } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import { Page } from '@/components/layout';
import { Button } from '@/components/ui';

type Props = FlexProps;

const Error404: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Page {...rest}>
      <Stack margin="auto" padding={8} spacing={4}>
        <Heading as="h1">Page not found</Heading>
        <NextLink href="/" passHref>
          <Button as="a">Back to home</Button>
        </NextLink>
      </Stack>
    </Page>
  );
};

export default Error404;

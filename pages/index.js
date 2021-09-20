import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Layout from '../src/components/Layout';

export default function Index() {
  return (
    <Layout>
        <Typography>Hello World!</Typography>
        <Copyright />
      </Layout>
  );
}

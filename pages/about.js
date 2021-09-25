import * as React from 'react';
import Layout from '../src/components/Layout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <Layout title="About Doug" description="Doug is a Software Engineer and Linux Enthusiast.">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5 example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </Layout>
  );
}

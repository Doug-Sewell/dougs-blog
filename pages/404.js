import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from '../src/components/Layout';
import Button from '@mui/material/Button';
import Link from '../src/Link';

export default function PageNotFound() {
    return(
        <Layout>
            <Container
                maxWidth={ false }
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    position: 'absolute', 
                    top: 0,
                    left: 0,
                    height: '100vh'
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    marginBottom={ 2 } 
                >
                    Page Not Found!
                </Typography>
                <Typography 
                    align="center"
                    marginBottom={ 2}
                >
                    You've landed on a page that doesn't exist! Let's get back to a working page.
                </Typography>
                <Button
                    variant="contained"
                    component={ Link }
                    href="/"
                    noLinkStyle
                >
                    Back to Homepage
                </Button>
            </Container>
        </Layout>
    )
};
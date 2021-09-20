import Head from 'next/head';
import Header from './Header';
import Container from '@mui/material/Container';
export default function Layout({title, description, children}) {

    return (
        <Container 
            maxWidth={ false } 
            disableGutters
        >
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{ children }</main>
        </Container>
    )
}

Layout.defaultProps = { 
    title: 'Welcome to Doug\'s Blog',
    description: 'A general blog about tech.'
}
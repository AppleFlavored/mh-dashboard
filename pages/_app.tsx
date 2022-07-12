import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <title>Minehut</title>
                <link rel='icon' type='image/png' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
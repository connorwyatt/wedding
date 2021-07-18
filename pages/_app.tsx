import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from 'components/Layout'
import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Connor &amp; Laura's Wedding</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default MyApp

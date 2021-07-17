import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Connor &amp; Laura's Wedding</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Component {...pageProps} />
  </>
)

export default MyApp

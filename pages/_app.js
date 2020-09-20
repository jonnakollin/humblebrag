import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import Navigation from '../components/navigation/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>heyjonna</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

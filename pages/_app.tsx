import App from 'next/app'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import theme from '../theme'
import Header from '../components/nav'
import Footer from '../components/footer'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }): Promise<object> {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render (): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <>
        <Global
          styles={{
            body: {
              margin: 0,
              fontFamily: [
                "-apple-system, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              ],
              fontSize: '18px',
              lineHeight: 1.7
            }
          }}
        />
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    )
  }
}

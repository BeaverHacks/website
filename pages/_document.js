import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:100,400,700,900'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto+Slab'
            rel='stylesheet'
          />
        </Head>
        <body css={{ paddingBottom: '4em' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

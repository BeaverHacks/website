import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render (): JSX.Element {
    return (
      <html>
        <Head>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Slab"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

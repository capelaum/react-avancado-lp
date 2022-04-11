import Analytics from 'components/Analytics'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React, { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class NextDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            rel="preload"
            href="/fonts/poppins-v9-latin-regular.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      initialProps.styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ) as any

      return {
        ...initialProps
      }
    } finally {
      sheet.seal()
    }
  }
}

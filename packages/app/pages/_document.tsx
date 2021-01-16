import Document, {
  Head, Main, NextScript, DocumentContext, Html,
} from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isProduction = true || process.env.NODE_ENV === 'production';

    return (
      <Html lang="en">
        <Head>
          <title>AmongThem</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

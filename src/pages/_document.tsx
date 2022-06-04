import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default class DocumentComponent extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

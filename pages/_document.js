import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670636/Mo%C3%ABt%20Lashes/SVGs/moet-favicon_qrqvht.svg"
          />
          <link
            rel="stylesheet"
            href="https://use.typekit.net/ccb1sla.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

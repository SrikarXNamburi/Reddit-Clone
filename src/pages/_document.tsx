import { Html, Head, Main, NextScript } from "next/document";
//set lang, load fonts, load scripts before page interactivity, collect style sheets for CSS
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Head, Html, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";
import { FC } from "react";

const getInitialProps = createGetInitialProps();

export const Document: FC = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

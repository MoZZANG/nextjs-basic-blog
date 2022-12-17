import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout";
import React, { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

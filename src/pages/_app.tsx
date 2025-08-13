// pages/_app.tsx
import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "@/contexts/ActiveSectionContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Designs coded with love, pixels, and a dash of caffeine — welcome to Nursila Yusmitha&apos;s world."
        />
        <title>Nursila Yusmitha | Portfolio</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}
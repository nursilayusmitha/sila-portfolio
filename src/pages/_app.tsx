// pages/_app.tsx
import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "@/contexts/ActiveSectionContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"; // ✅ gunakan /react, bukan /next

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

          {/* Live Chat Widget */}
          <Script id="livechat-config" strategy="afterInteractive">
            {`
              window.LiveChatConfig = {
                businessId: "cmjlcmqgg000it9wb45uizayd",
                apiUrl: "https://api.sentinelhub.ai",
                // Customization
                primaryColor: "#60A5FA",
                secondaryColor: "#1E40AF",
                position: "bottom-left",
                iconUrl: "https://api.sentinelhub.ai/storage/files/widgets/cmjlcmqgg000it9wb45uizayd/icon-1767572767280.png"
                fontFamily: "Inter, system-ui, sans-serif",
                fontColor: "#333333",
                fontSize: "14px"
              };
            `}
          </Script>
          <Script
            src="https://api.sentinelhub.ai/widget/live-chat-widget.js"
            strategy="afterInteractive"
          />

          <Analytics /> {/* ✅ panggil di sini */}
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}

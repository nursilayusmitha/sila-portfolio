// pages/_app.tsx
import { ThemeProvider } from "next-themes";
import { ScrollProvider } from "@/contexts/ActiveSectionContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"; 

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
          <Script id="livechat-loader" strategy="afterInteractive">
            {`
              (function () {
                try {
                  var businessId = "cmjlcmqgg000it9wb45uizayd";
                  var apiUrl = "https://api.sentinelhub.ai";

                  // Build config
                  var cfg = {
                    businessId: businessId,
                    apiUrl: apiUrl,
                    primaryColor: "#60A5FA",
                    secondaryColor: "#1E40AF",
                    position: "bottom-left",
                    iconUrl: "/storage/files/widgets/cmjlcmqgg000it9wb45uizayd/icon-1767572767280.png",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontColor: "#333333",
                    fontSize: "14px"
                  };

                  // Compatibility aliases (some widgets validate these)
                  cfg["business-id"] = businessId;
                  cfg["business_id"] = businessId;

                  // Normalize iconUrl: if relative, make it absolute using apiUrl
                  if (cfg.iconUrl && typeof cfg.iconUrl === "string") {
                    var isAbs =
                      cfg.iconUrl.startsWith("http://") ||
                      cfg.iconUrl.startsWith("https://") ||
                      cfg.iconUrl.startsWith("//") ||
                      cfg.iconUrl.startsWith("data:") ||
                      cfg.iconUrl.startsWith("blob:");
                    if (!isAbs && cfg.iconUrl.startsWith("/")) {
                      cfg.iconUrl = apiUrl.replace(/\\/$/, "") + cfg.iconUrl;
                    }
                  }

                  window.LiveChatConfig = cfg;

                  // Prevent double-loading on route changes
                  if (window.__LIVE_CHAT_WIDGET_LOADED__) return;
                  window.__LIVE_CHAT_WIDGET_LOADED__ = true;

                  // Inject widget script AFTER config is set
                  var existing = document.querySelector('script[data-livechat-widget="1"]');
                  if (existing) return;

                  var s = document.createElement("script");
                  s.src = apiUrl.replace(/\\/$/, "") + "/widget/live-chat-widget.js";
                  s.async = true;
                  s.defer = true;
                  s.setAttribute("data-livechat-widget", "1");
                  document.body.appendChild(s);
                } catch (e) {
                  // swallow
                }
              })();
            `}
          </Script>

          <Analytics /> {/* ✅ panggil di sini */}
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}

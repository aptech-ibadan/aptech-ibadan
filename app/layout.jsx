import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import LayoutWrapper from "@/components/LayoutWrapper";

// Base URL for your site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://aptechibadan.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aptech Ibadan - Become An IT Pro",
    template: "%s | Aptech Ibadan",
  },
  description:
    "Become An IT Pro at Aptech Ibadan. Learn software engineering, cybersecurity, data analysis, and more with globally recognized certifications.",
  keywords:
    "IT, Training, Aptech, ITSS, T24, Infinity, Web Development, Software Engineering, Cybersecurity, Ibadan",
  authors: [{ name: "Aptech Ibadan" }],
  creator: "Aptech Ibadan",
  publisher: "Aptech Ibadan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph tags for social media preview
  openGraph: {
    title: "Aptech Ibadan - Become An IT Pro",
    description:
      "Learn software engineering, cybersecurity, data analysis, and more at Aptech Ibadan. Global certifications and study abroad pathways.",
    url: BASE_URL,
    siteName: "Aptech Ibadan",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aptech Ibadan - Become An IT Pro",
        type: "image/jpeg",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Aptech Ibadan - Become An IT Pro",
    description:
      "Learn software engineering, cybersecurity, data analysis, and more at Aptech Ibadan.",
    images: [`${BASE_URL}/og-image.jpg`],
    site: "@aptechibadan",
    creator: "@aptechibadan",
  },
  // Additional meta tags
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
};

const MainLayout = ({ children }) => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "hTFADsLnPwYQlAoiwaq1t";

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Additional meta tags for better preview */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="theme-color" content="#020B2D" />

        {/* Facebook/WhatsApp specific */}
        <meta
          property="fb:app_id"
          content={process.env.NEXT_PUBLIC_FB_APP_ID || ""}
        />

        {/* LinkedIn specific */}
        <meta name="linkedin:site" content={BASE_URL} />
      </head>
      <body className="bg-page-bg">
        <LayoutWrapper>
          <div>{children}</div>
        </LayoutWrapper>

        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        {/* Chatbase AI Widget */}
        <Script id="chatbase-ai" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                window.chatbase = (...args) => {
                  if(!window.chatbase.q){
                    window.chatbase.q = []
                  }
                  window.chatbase.q.push(args)
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop){
                    if(prop === "q"){
                      return target.q
                    }
                    return (...args) => target(prop, ...args)
                  }
                });
              }
              const onLoad = function(){
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "hTFADsLnPwYQlAoiwaq1t";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };
              if(document.readyState === "complete"){
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
};

export default MainLayout;

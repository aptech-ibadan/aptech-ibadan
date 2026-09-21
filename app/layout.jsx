import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import LayoutWrapper from "@/components/LayoutWrapper";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_URL, isValidGa4Id, organizationJsonLd } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Aptech Ibadan | IT Training & Professional Courses",
    template: "%s | Aptech Ibadan",
  },

  description:
    "Learn software development, cybersecurity, networking, multimedia and other in-demand IT skills at Aptech Ibadan. Explore professional IT courses, short courses and career-focused training.",

  authors: [{ name: "Aptech Ibadan" }],
  creator: "Aptech Ibadan",
  publisher: "Aptech Ibadan",

  applicationName: "Aptech Ibadan",

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

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Aptech Ibadan",
    title: "Aptech Ibadan | IT Training & Professional Courses",
    description:
      "Build in-demand technology skills with career-focused IT training at Aptech Ibadan. Explore software development, cybersecurity, networking, multimedia and short courses.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aptech Ibadan - IT Training and Professional Courses",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aptech Ibadan | IT Training & Professional Courses",
    description:
      "Career-focused IT training in Ibadan covering software development, cybersecurity, networking, multimedia and more.",
    images: [`${BASE_URL}/og-image.jpg`],
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Only emit the verification tag when a real value is configured.
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        },
      }
    : {}),
};

const MainLayout = ({ children }) => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  // Only load Google Analytics when a valid GA4 measurement ID is present.
  // This prevents a non-GA id (e.g. a Chatbase key) from loading gtag.js.
  const shouldLoadGA = isValidGa4Id(GA_ID);

  return (
    <html lang="en-NG">
      <head>
        <JsonLd id="organization-jsonld" data={organizationJsonLd()} />

        {shouldLoadGA && (
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

        <meta name="theme-color" content="#020B2D" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />

        {process.env.NEXT_PUBLIC_FB_APP_ID && (
          <meta
            property="fb:app_id"
            content={process.env.NEXT_PUBLIC_FB_APP_ID}
          />
        )}
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

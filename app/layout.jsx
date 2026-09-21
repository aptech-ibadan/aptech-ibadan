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
    "IT, Training, Aptech, ITSS, T24, Infinity, Web Development, Software Engineering, Cybersecurity, Ibadan, Tech School in Ibadan, Nigeria, Data Science, Programming, Coding Bootcamp, IT Courses, Professional Development, Career in IT, Technology Training, IT Certifications, Software Development, Tech Skills, IT Education, Aptech Ibadan Courses, IT Career Pathways, Learn to Code, IT Training Center, Tech Education in Nigeria, IT Skills Development, Aptech Training Programs, IT Career Opportunities, Tech Bootcamp, IT Learning, Aptech Nigeria, IT Training Institute, IT Professional Courses, Tech Skills Training, IT Career Advancement, Aptech IT School, IT Training in Ibadan, Nigeria Tech Education, IT Career Development, Aptech IT Training, IT Skills Enhancement, Tech Career Pathways, IT Learning Center, Aptech IT Programs, IT Professional Development, Tech Skills Bootcamp, IT Career Growth, Aptech IT Courses in Ibadan, Nigeria Tech Training, IT Skills Improvement, Aptech IT Education Programs, IT Career Opportunities in Nigeria, Tech Skills Development Center, Aptech IT Training Institute, IT Professional Skills Training, Tech Career Advancement Programs, Aptech IT Learning Center, IT Skills Enhancement Programs, Tech Career Growth Opportunities, Aptech IT Training Courses, IT Professional Development Programs, Tech Skills Bootcamp in Nigeria, Aptech IT Education and Training, IT Career Pathways in Ibadan, Nigeria Tech Skills Development, Aptech IT Training and Certification, IT Professional Skills Enhancement, Tech Career Advancement Opportunities, Aptech IT Learning and Development, IT Skills Improvement Programs in Nigeria, Aptech IT Education and Career Pathways, Aptech IT Training and Professional Development, IT Career Growth Opportunities in Ibadan, Nigeria Tech Skills Enhancement, Aptech IT Learning and Certification Programs, IT Professional Development and Career Advancement, Tech Skills Bootcamp and Training in Nigeria, Aptech IT Education and Skills Development, IT Career Pathways and Professional Growth in Ibadan, Nigeria Tech Training and Certification, Aptech IT Training and Career Opportunities, IT Professional Skills Enhancement and Development Programs, Tech Career Advancement and Learning Opportunities in Nigeria, Aptech IT Learning and Professional Development Programs, IT Skills Improvement and Career Growth in Ibadan, Nigeria Tech Education and Training Programs, Aptech IT Training and Certification Courses, IT Professional Development and Career Advancement Opportunities, Tech Skills Bootcamp and Learning Programs in Nigeria, Aptech IT Education and Skills Enhancement Programs, IT Career Pathways and Professional Growth Opportunities in Ibadan, Nigeria Tech Training and Certification Courses",
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

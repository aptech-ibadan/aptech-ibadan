import "@/assets/styles/globals.css";

import Navbar from "@/components/Navbar";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Script from "next/script";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aptech Ibadan",

  description: "Become An IT Pro",

  keywords: "IT, Training, Aptech, ITSS, T24, Infinity, WebDevelopment",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-page-bg">
        <Navbar />

        <div>{children}</div>

        <ToastContainer position="top-right" autoClose={3000} theme="colored" />

        {/* ✅ Chatbase AI Widget */}
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

                script.id = "Ao92HkXmEIk-UB9PbgpA0";

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

        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;

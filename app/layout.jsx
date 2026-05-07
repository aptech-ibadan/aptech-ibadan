import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Aptech Ibadan",
  description: "Become An IT Pro",
  keywords: "IT, Training, Aptech,ITSS, T24, Infinity, WebDevelopment",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-page-bg">
        <Navbar />
        <div>{children}</div>
         <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
        />
      </body>
    </html>
  );
};
export default MainLayout;

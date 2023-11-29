import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteNavbar from "@/components/WebsiteNavbar";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infintrix Technologies",
  description: "Anonymous Feedbacks App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col h-screen`}
        suppressHydrationWarning={true}
      >
        {/* <AuthProvider> */}
        {/* <ThemeProvider> */}

        <WebsiteNavbar />
        <div className="flex-1">{children}</div>
        <ToastContainer />
        <MainFooter />
        {/* </ThemeProvider> */}
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js To-Do App",
  description: "A sleek and modern to-do app powered by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="max-w-4xl mx-auto p-6 shadow-lg bg-white rounded-lg mt-10">
          <Navbar />
          <div className="mt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}

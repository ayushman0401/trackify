import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "trackify",
  description: "split expense with ai assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="" />
      </head>
      <body className={`${inter.className}  `}>
      <ClerkProvider>
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ConvexClientProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: "Elias Wambugu Portfolio",
  description: "Elias Wambugu Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          
          {children}
        </Providers>
      </body>
    </html>
  );
}

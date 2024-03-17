import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shedrach Jonah Mark",
  description:
    "Welcome to Shedrach Jonah Mark's portfolio site. Explore my work and get in touch!",
  icons: "hero-image.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

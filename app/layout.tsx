import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Negi — Full-Stack Developer",
  description:
    "Personal portfolio of Ayush Negi — Full-Stack Developer focused on AI, software engineering, and practical web applications.",
  metadataBase: new URL("https://ayushnegiexe.vercel.app"),
  openGraph: {
    title: "Ayush Negi — Full-Stack Developer",
    description: "Full-stack development, AI applications, and software engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
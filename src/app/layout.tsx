import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Prompt | Generate Perfect AI Prompts in Seconds",
  description: "Unlock the full potential of AI with prompts engineered for precision and creativity. The ultimate tool for prompt engineering.",
  openGraph: {
    title: "Prime Prompt | Generate Perfect AI Prompts in Seconds",
    description: "Unlock the full potential of AI with prompts engineered for precision and creativity.",
    type: "website",
    locale: "en_US",
    // url: "https://primeprompt.ai", // Placeholder
    // siteName: "Prime Prompt",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Prime Prompt App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Prompt",
    description: "Generate Perfect AI Prompts in Seconds",
    // images: ["/twitter-image.jpg"], // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

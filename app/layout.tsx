import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jad Boukentar | Technical Artist & Game Designer",
    template: "%s | Jad Boukentar",
  },
  description:
    "Technical Artist & Game Designer building shaders, lighting, tools, and gameplay systems. Portfolio of Unreal Engine and Unity projects.",
  metadataBase: new URL("https://jadb-portfolio.vercel.app/"), 
  openGraph: {
    title: "Jad Boukentar | Technical Artist & Game Designer",
    description:
      "Technical Art, gameplay systems, and interactive design. Unreal Engine & Unity projects, case studies, and prototypes.",
    url: "/",
    siteName: "Jad Boukentar Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jad Boukentar Portfolio",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jad Boukentar | Technical Artist & Game Designer",
    description:
      "Technical Art, gameplay systems, and interactive design. Unreal Engine & Unity projects.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f1115] text-white">

        <nav className="sticky top-0 z-50 backdrop-blur bg-[#0f1115]/80 border-b border-white/5">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

            <h1 className="font-semibold tracking-wide">
              Jad Boukentar
            </h1>

            <div className="space-x-6 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition">Home</a>
              <a href="/#skills" className="hover:text-white transition">Expertise</a>
              <a href="/#projects" className="hover:text-white transition">Projects</a>
              <a href="/about" >About</a>
              <a href="/#contact" className="hover:text-white transition">Contact</a>
              <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded-md border border-white/10 hover:border-blue-400 transition">
              Resume
              </a>
            </div>

          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6">
          {children}
        </main>

      </body>
    </html>
  );
}

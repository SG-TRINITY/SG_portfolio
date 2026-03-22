import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./academia-layout.css";
import { site } from "@/lib/site";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const themeInit = `
(function(){
  try {
    var k=${JSON.stringify(THEME_STORAGE_KEY)};
    var s=localStorage.getItem(k);
    if(s==='academia'||s==='terminal') document.documentElement.setAttribute('data-theme',s);
    else document.documentElement.setAttribute('data-theme','terminal');
  } catch(e) {
    document.documentElement.setAttribute('data-theme','terminal');
  }
})();`;

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={jetbrainsMono.variable}
      data-theme="terminal"
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}

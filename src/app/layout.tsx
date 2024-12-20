import type { Metadata } from "next";
import { DM_Sans} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/context-providers/theme";
import Navbar from "@/components/shared/navbar";
const font = DM_Sans({
  subsets: ['latin','latin-ext']
})
export const metadata: Metadata = {
  title: "Pacifica Pretier",
  description: "Straight to details no bs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${font.className}  flex flex-col min-h-screen antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        
            <Navbar/>
            <div className="secondary-nav p-2">
  
            </div>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// // HAPUS "use client"; dari sini

import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";

// 'metadata' akan berfungsi dengan benar di Server Component
export const metadata: Metadata = {
  title: "My Notess",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

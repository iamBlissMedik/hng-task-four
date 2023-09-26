"use client";
import NavBar from "@/components/NavBar";
import "./globals.css";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathName}
            initial="initialState"
            animate="animateState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
              },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

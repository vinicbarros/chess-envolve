import { MainContextProvider } from "@/context/mainContext";
import "@/styles/globals.css";
import { Open_Sans as MainFont } from "next/font/google";

export const metadata = {
  title: "Envolve Chess",
  description: "Case for Envolve",
};

const mainFont = MainFont({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="bg-ocean-dark text-white dark:text-white">
        <MainContextProvider>{children}</MainContextProvider>
      </body>
    </html>
  );
}

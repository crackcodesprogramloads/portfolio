import { Montserrat } from "next/font/google";
import "./globals.css";

import BackgroundBorder from "./components/BackgroundBorder";
import Sidebar from "./components/Sidebar";

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: "200",
});

export const metadata = {
  title: "Mike Padial - Dev",
  description:
    "A portfolio of web developer and UI designer Mike Padial. Website Built with Next.Js, Typescript, Tailwind CSS and Framer motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="overflow-hidden p-0 m-0 box-border flex w-screen min-h-screen text-slate-300">
        <div
          className="flex items-center justify-center min-h-full w-full  
            bg-gradient-to-br 
            from-sky-950 
            via-gray-800
            to-emerald-950
            "
        >
          <BackgroundBorder>
            <Sidebar />
            {children}
          </BackgroundBorder>
        </div>
      </body>
    </html>
  );
}

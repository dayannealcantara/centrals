import type { Metadata } from "next";
import { ReactNode } from "react";

import { fonts } from "@components/styles/fonts";
import "@styles/global.css";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Defense IA | Middlewares e Centrais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={fonts.nunito}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

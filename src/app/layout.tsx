import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./_styles/globals.css";
import App from "./(pages)/App";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import StyledComponentsRegistry from "./_styles/registry";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
        <div id="modal-root" />
      </body>
    </html>
  );
}

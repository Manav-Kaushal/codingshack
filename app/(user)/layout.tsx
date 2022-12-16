import Banner from "@components/Web/Banner";
import Header from "@components/Web/Header";
import React from "react";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}

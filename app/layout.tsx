import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "./footer";
import NavBar from "./navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIPOSKI HouseOfColours",
  description: "Created by GIPOSKI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

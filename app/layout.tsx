import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const khand = localFont({
	src: "../public/fonts/Khand-Bold.woff2",
});

export const metadata: Metadata = {
	title: "CryptoTrade",
	description: "CryptoTrade - The Future of Crypto Trading",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark" lang="en">
			<body className={`${khand.className} antialiased`}>{children}</body>
		</html>
	);
}

import Head from "next/head";
import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "@/app/components/ServiceWorkerRegistrar"; // Update with actual path

export const metadata: Metadata = {
	title: "Coaching Tales",
	description: "Coaching tales from women in football.",
};

const montserratAlternates = Montserrat_Alternates({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
				<link rel="apple-touch-icon" href="/football_192.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			</Head>
			<body className={montserratAlternates.className}>
				<ServiceWorkerRegistrar />
				<main className="w-screen h-screen">{children}</main>
			</body>
		</html>
	);
}

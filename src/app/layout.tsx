import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Coaching Tales",
	description: "Coaching tales from women in football.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

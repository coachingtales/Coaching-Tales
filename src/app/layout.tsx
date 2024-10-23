import type { Metadata } from "next";
import { Montserrat_Alternates } from "@next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Coaching Tales",
	description: "Coaching tales from women in football.",
};

const montserratAlternates = Montserrat_Alternates({
	subsets: ["latin"],
	weight: ["400", "700"], // Specify the weights you need
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={montserratAlternates.className}>
				<main className="w-screen h-screen">{children}</main>
			</body>
		</html>
	);
}

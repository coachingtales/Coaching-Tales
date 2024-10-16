"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function SavePDF() {
	const { choices, coach, path } = useParams();

	if (!choices) {
		return <div>Loading...</div>;
	}
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				{coach}
				<br />
				{path}
				<br />
				{choices}
				<br />
				Save PDF
			</h1>
			<Link href={"/"}>Skip</Link>
		</div>
	);
}

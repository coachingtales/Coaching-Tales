"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function EndPage() {
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
				End
			</h1>
			<Link href={`/pick_tale/${coach}/${path}/${choices}/end/save_pdf`}>
				Save PDF
			</Link>
			<Link href={"/"}>Reset</Link>
		</div>
	);
}

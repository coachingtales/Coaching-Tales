"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const SavePDF: React.FC = () => {
	const { choices, coach, path } = useParams();

	if (!choices) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center p-5">
			<h1 className="text-4xl font-bold underline">
				{coach}
				<br />
				{path}
				<br />
				{choices}
				<br />
				Save PDF
			</h1>
			<div className="mt-4">
				<Link href="/">Skip</Link>
			</div>
		</div>
	);
};

export default SavePDF;

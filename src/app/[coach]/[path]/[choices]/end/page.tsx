"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";

const EndPage: React.FC = () => {
	const { choices, coach, path } = useParams();
	const { name, color } = useCoachDetails({ coach, path, choices } as {
		coach: string;
		path: string;
		choices: string;
	});

	if (!choices) {
		return <div>Loading...</div>;
	}

	return (
		<div
			className="w-dvw h-dvh grid place-content-center p-5"
			style={{ background: `${color}` }}
		>
			<h1 className="text-4xl font-bold underline">{name}</h1>
			<div className="mt-4 space-y-2">
				<Link href={`/${coach}/${path}/${choices}/end/save_pdf`}>Save PDF</Link>
				<Link href="/">Reset</Link>
			</div>
		</div>
	);
};

export default EndPage;

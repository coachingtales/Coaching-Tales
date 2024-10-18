// Path.tsx
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";

const Path: React.FC = () => {
	const { coach, path } = useParams();
	const { details, detailsTitle, detailsAudio, detailsImage, name, PDF } =
		useCoachDetails({ coach, path } as { coach: string; path: string });

	if (!coach) {
		return <div>Loading...</div>;
	}

	const coachChoice1 = PDF.component_choice_1
		? PDF.component_choice_1.title
		: "";
	const coachChoice2 = PDF.component_choice_2
		? PDF.component_choice_2.title
		: "";

	return (
		<div className="w-dvw h-dvh grid place-content-center p-5">
			<h1 className="text-4xl font-bold underline">{name}</h1>
			<h2 className="text-2xl mt-4">{detailsTitle}</h2>
			<p className="mt-4">{details}</p>
			<p>{detailsAudio}</p>
			<p>{detailsImage}</p>
			<ul className="mt-4 space-y-2">
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_1`}>
						{coachChoice1}
					</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_2`}>
						{coachChoice2}
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Path;

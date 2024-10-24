"use client";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";

const Choices = ({ params }: Props) => {
	const { choices, coach, path } = params;
	const { details, detailsTitle, detailsAudio, detailsImage, name, color } =
		useCoachDetails({ coach, path, choices } as {
			coach: string;
			path: string;
			choices: string;
		});

	if (!coach) {
		return <div>Loading...</div>;
	}

	return (
		<div
			className="w-dvw h-dvh grid place-content-center p-5"
			style={{ background: `${color}` }}
		>
			<h1 className="text-4xl font-bold underline">{name}</h1>
			<br />
			<h2 className="text-2xl">{detailsTitle}</h2>
			<br />
			<p>{details}</p>
			<p>{detailsAudio}</p>
			<p>{detailsImage}</p>
			<br />
			<Link href={`/${coach}/choose_path/${path}/${choices}/end`}>End</Link>
		</div>
	);
};

export default Choices;

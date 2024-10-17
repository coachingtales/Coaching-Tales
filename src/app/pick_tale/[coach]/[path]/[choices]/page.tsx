"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import coachData from "@/app/data/coachData.json";
import type {
	CoachComponents,
	ComponentDetails,
} from "@/app/interfaces/CoachDetails";

const Choices: React.FC = () => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const [detailsAudio, setDetailsAudio] = useState("");
	const [detailsImage, setDetailsImage] = useState("");
	const { choices, coach, path } = useParams();

	useEffect(() => {
		if (!coach) return;

		const coachDetails = coachData.details.find(
			(coachURL: CoachComponents) => coachURL.url === coach,
		);

		if (!coachDetails) {
			setDetails("Coach not found");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			return;
		}

		let selectedDetails: ComponentDetails;
		if (path === "Football") {
			selectedDetails =
				choices === "choice_1"
					? coachDetails.component_4
					: coachDetails.component_5;
		} else {
			selectedDetails =
				choices === "choice_1"
					? coachDetails.component_6
					: coachDetails.component_7;
		}

		if (!selectedDetails) {
			setDetails("No details found");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			return;
		}

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
		setDetailsAudio(selectedDetails.audio_file || "");
		setDetailsImage(selectedDetails.image_link || "");
	}, [coach, choices, path]);

	if (!coach) {
		return <div>Loading...</div>;
	}

	const coachDetails = coachData.details.find(
		(coachURL: CoachComponents) => coachURL.url === coach,
	);

	if (!coachDetails) {
		return <div>Coach not found</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center p-5">
			<h1 className="text-4xl font-bold underline">
				{coach}
				<br />
				{path}
				<br />
				{choices}
			</h1>
			<br />
			<h2 className="text-2xl">{detailsTitle}</h2>
			<br />
			<p>{details}</p>
			<p>Audio: {detailsAudio}</p>
			<p>Image: {detailsImage}</p>
			<br />
			<Link href={`/pick_tale/${coach}/${path}/${choices}/end`}>End</Link>
		</div>
	);
};

export default Choices;

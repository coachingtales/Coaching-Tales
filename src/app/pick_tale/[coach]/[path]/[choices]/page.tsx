"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import coachData from "../../../../../../data/coachData.json";

interface CoachDetails {
	url: string;
	component_2?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_3?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_4?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_5?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_6?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_7?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
}

const Choices: React.FC = () => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const [detailsAudio, setDetailsAudio] = useState("");
	const [detailsImage, setDetailsImage] = useState("");
	const { choices, coach, path } = useParams();

	useEffect(() => {
		if (!coach) return;

		const coachDetails = coachData.details.find(
			(coachURL: CoachDetails) => coachURL.url === coach,
		);

		if (!coachDetails) {
			setDetails("Coach not found");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			return;
		}

		const detailsMap: {
			[key: string]: {
				transcript?: string;
				title?: string;
				audio_file?: string;
				image_link?: string;
			};
		} = {
			irene_taylor_choice_1_Football: coachDetails.component_4 || {},
			irene_taylor_choice_2_Football: coachDetails.component_5 || {},
			irene_taylor_choice_1_Culture: coachDetails.component_6 || {},
			irene_taylor_choice_2_Culture: coachDetails.component_7 || {},
			bobbie_leigh_choice_1_Football: coachDetails.component_4 || {},
			bobbie_leigh_choice_2_Football: coachDetails.component_5 || {},
			bobbie_leigh_choice_1_Culture: coachDetails.component_6 || {},
			bobbie_leigh_choice_2_Culture: coachDetails.component_7 || {},
			michele_robinson_choice_1_Football: coachDetails.component_4 || {},
			michele_robinson_choice_2_Football: coachDetails.component_5 || {},
			michele_robinson_choice_1_Culture: coachDetails.component_6 || {},
			michele_robinson_choice_2_Culture: coachDetails.component_7 || {},
		};

		const key = `${coach}_${choices}_${path}`;
		const selectedDetails = detailsMap[key] || {
			transcript: "No details found",
			title: "",
			audio_file: "",
			image_link: "",
		};

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
		setDetailsAudio(selectedDetails.audio_file || "");
		setDetailsImage(selectedDetails.image_link || "");
	}, [coach, choices, path]);

	if (!coach) {
		return <div>Loading...</div>;
	}

	const coachDetails = coachData.details.find(
		(coachURL: CoachDetails) => coachURL.url === coach,
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

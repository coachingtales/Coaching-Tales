"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import coachData from "../../../../../data/coachData.json";

interface KeyFacts {
	born?: string;
	location: string;
}

interface CoachDetails {
	name: string;
	url: string;
	component_2?: {
		transcript: string;
		title: string;
	};
	component_3?: {
		transcript: string;
		title: string;
	};
	component_4?: {
		transcript: string;
		title: string;
	};
	component_5?: {
		transcript: string;
		title: string;
	};
	component_6?: {
		transcript: string;
		title: string;
	};
	component_7?: {
		transcript: string;
		title: string;
	};
}

const Path: React.FC = () => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const { coach, path } = useParams();

	useEffect(() => {
		if (!coach) return;

		const coachDetails = coachData.details.find(
			(coachURL: CoachDetails) => coachURL.url === coach,
		);

		if (!coachDetails) {
			setDetails("Coach not found");
			setDetailsTitle("");
			return;
		}

		const detailsMap: {
			[key: string]: { transcript?: string; title?: string };
		} = {
			irene_taylor_Football: coachDetails.component_2 || {},
			irene_taylor_Other: coachDetails.component_3 || {},
			bobbie_leigh_Football: coachDetails.component_2 || {},
			bobbie_leigh_Other: coachDetails.component_3 || {},
			michele_robinson_Football: coachDetails.component_2 || {},
			michele_robinson_Other: coachDetails.component_3 || {},
		};

		const key = `${coach}_${path === "Football" ? "Football" : "Other"}`;
		const selectedDetails = detailsMap[key] || {
			transcript: "No details found",
			title: "",
		};

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
	}, [coach, path]);

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
			<h1 className="text-4xl font-bold underline">{coachDetails.name}</h1>
			<h2 className="text-2xl mt-4">{detailsTitle}</h2>
			<p className="mt-4">{details}</p>
			<ul className="mt-4 space-y-2">
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_1`}>choice 1</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_2`}>choice 2</Link>
				</li>
			</ul>
		</div>
	);
};

export default Path;

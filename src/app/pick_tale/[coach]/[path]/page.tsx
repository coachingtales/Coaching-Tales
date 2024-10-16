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
	football_coaching?: {
		transcript: string;
		title: string;
	};
	life_in_interwar_britain?: {
		transcript: string;
		title: string;
	};
	growing_up_in_1960s_britain?: {
		transcript: string;
		title: string;
	};
	growing_up_in_britain_in_the_1960s_and_1970s?: {
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
			irene_taylor_Football: coachDetails.football_coaching || {},
			irene_taylor_Other: coachDetails.life_in_interwar_britain || {},
			bobbie_leigh_Football: coachDetails.football_coaching || {},
			bobbie_leigh_Other: coachDetails.growing_up_in_1960s_britain || {},
			michele_robinson_Football: coachDetails.football_coaching || {},
			michele_robinson_Other:
				coachDetails.growing_up_in_britain_in_the_1960s_and_1970s || {},
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

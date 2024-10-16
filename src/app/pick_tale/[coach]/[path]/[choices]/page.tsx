"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import coachData from "../../../../../../data/coachData.json";

interface CoachDetails {
	url: string;
	goalkeeping?: { transcript: string; title: string };
	the_throw_in?: { transcript: string; title: string };
	women_in_interwar_britain?: { transcript: string; title: string };
	sport_in_interwar_britain?: { transcript: string; title: string };
	the_header?: { transcript: string; title: string };
	the_1960s_fa_rulebook?: { transcript: string; title: string };
	youth_clubs_in_1960s_britain?: { transcript: string; title: string };
	women_in_1960s_britain?: { transcript: string; title: string };
	football_coaching_qualifications?: { transcript: string; title: string };
	developing_football_in_the_1980s?: { transcript: string; title: string };
	employment_choices_for_women_in_1970s_britain?: {
		transcript: string;
		title: string;
	};
	region?: { transcript: string; title: string };
}

const Choices: React.FC = () => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const { choices, coach, path } = useParams();

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
			irene_taylor_choice_1_Football: coachDetails.goalkeeping || {},
			irene_taylor_choice_2_Football: coachDetails.the_throw_in || {},
			irene_taylor_choice_1_Culture:
				coachDetails.women_in_interwar_britain || {},
			irene_taylor_choice_2_Culture:
				coachDetails.sport_in_interwar_britain || {},
			bobbie_leigh_choice_1_Football: coachDetails.the_header || {},
			bobbie_leigh_choice_2_Football: coachDetails.the_1960s_fa_rulebook || {},
			bobbie_leigh_choice_1_Culture:
				coachDetails.youth_clubs_in_1960s_britain || {},
			bobbie_leigh_choice_2_Culture: coachDetails.women_in_1960s_britain || {},
			michele_robinson_choice_1_Football:
				coachDetails.football_coaching_qualifications || {},
			michele_robinson_choice_2_Football:
				coachDetails.developing_football_in_the_1980s || {},
			michele_robinson_choice_1_Culture:
				coachDetails.employment_choices_for_women_in_1970s_britain || {},
			michele_robinson_choice_2_Culture: coachDetails.region || {},
		};

		const key = `${coach}_${choices}_${path}`;
		const selectedDetails = detailsMap[key] || {
			transcript: "No details found",
			title: "",
		};

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
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
			<br />
			<Link href={`/pick_tale/${coach}/${path}/${choices}/end`}>End</Link>
		</div>
	);
};

export default Choices;

"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import coachData from "@/app/data/coachData.json";

const CoachDetailsPage: React.FC = () => {
	const { coach } = useParams();
	const [id, setId] = useState(0);

	const coachesUrl = coachData.details[id].url;

	const { name, born, active, location } = useCoachDetails({
		coach: coachesUrl,
	} as {
		coach: string;
	});

	if (!coach) {
		return <div>Loading...</div>;
	}

	if (!name) {
		return <div>Coach not found</div>;
	}

	function nextCoach() {
		if (id === coachData.details.length - 1) {
			setId(0);
		} else {
			setId(id + 1);
		}
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			{name && <h1 className="text-4xl font-bold underline">{name}</h1>}
			{!name && (
				<h1 className="text-4xl font-bold underline">No Coach found</h1>
			)}
			<ul className="space-y-2">
				{born && <li>{born}</li>}
				{active && <li>{active}</li>}
				{location && <li>{location}</li>}
				<li>
					<Link href={`/${coachesUrl}/Football`}>Football Coaching</Link>
				</li>
				<li>
					<Link href={`/${coachesUrl}/Culture`}>Culture and Influence</Link>
				</li>
			</ul>
			<button type="button" onClick={nextCoach}>
				Next
			</button>
		</div>
	);
};

export default CoachDetailsPage;

"use client";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import useCoachNavigation from "@/app/hooks/useCoachNavigation";
import coachData from "@/app/data/coachData.json";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachDetailsPage = ({ params }: Props) => {
	const { coach } = params;
	const {
		id,
		transition,
		loading,
		firstPage,
		coachesUrl,
		nextCoach,
		previousCoach,
		chooseCoach,
	} = useCoachNavigation();

	const { name, born, active, location, color } = useCoachDetails({
		coach: coachesUrl,
	} as {
		coach: string;
	});

	if (!coach) {
		return <h1>No Coach Found</h1>;
	}

	return (
		<div className="grid place-content-center min-h-screen">
			{name ? (
				<button type="button" onClick={nextCoach}>
					<p
						className={`${transition ? "opacity-0" : "opacity-100"} transition-all duration-300`}
					>
						<Link
							href={`/${coachesUrl}/Football`}
							className={`bg-[${color}] px-4 py-2 rounded-sm`}
						>
							{name}
						</Link>{" "}
						{born && `was born ${born} and`} was active in {location},{" "}
						{active.toLowerCase()}.
					</p>
				</button>
			) : (
				<h1>No name Found</h1>
			)}
		</div>
	);
};

export default CoachDetailsPage;

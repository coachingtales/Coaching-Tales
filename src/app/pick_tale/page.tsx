import Link from "next/link";

export default function PickTale() {
	const coachNames = ["Bobbie Leigh", "Irene Taylor", "Michele Robinson"];

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Pick a Tale</h1>
			<ul>
				{coachNames.map((coach) => {
					const coachUrl = coach.split(" ").join("_");
					return (
						<li key={coachUrl}>
							<Link href={`/pick_tale/${coachUrl}`}>{coach}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

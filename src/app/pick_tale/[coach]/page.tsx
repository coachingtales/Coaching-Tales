"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CoachDetails() {
	const { coach } = useParams();

	if (!coach) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">{coach}</h1>
			<ul>
				<li>
					<Link href={`/pick_tale/${coach}/Football`}>Football</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/Culture`}>Culture</Link>
				</li>
			</ul>
		</div>
	);
}

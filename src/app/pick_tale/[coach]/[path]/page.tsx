"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Path() {
	const { coach, path } = useParams();

	if (!coach) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				{coach.toString().split("_").join(" ")}
				<br />
				{path}
			</h1>
			<ul>
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_1`}>choice 1</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/${path}/choice_2`}>choice 2</Link>
				</li>
			</ul>
		</div>
	);
}

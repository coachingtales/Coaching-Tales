import Link from "next/link";

export default function Home() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Coaching Tales</h1>
			<Link href="/chooseCoach">Start</Link>
		</div>
	);
}

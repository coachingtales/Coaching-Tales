import Link from "next/link";
export default function PageThree() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/Football/Page Two
			</h1>
			<Link href={"/bobbie_leigh/football/end_journey"}>End of Journey</Link>
		</div>
	);
}

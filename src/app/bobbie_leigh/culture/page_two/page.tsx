import Link from "next/link";
export default function PageTwo() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/Culture/Page Two
			</h1>
			<Link href={"/bobbie_leigh/culture/end_journey"}>End of Journey</Link>
		</div>
	);
}

import Link from "next/link";
export default function EndJourney() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Save or Restart</h1>
			<Link href={"/"}>Restart</Link>
			<Link href={"/bobbie_leigh/culture/end_journey/pdf"}>Save</Link>
		</div>
	);
}

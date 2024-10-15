import Link from "next/link";
export default function BobbieLeigh() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Bobbie Leigh</h1>
			<Link href={"/bobbie_leigh/culture"}>Culture</Link>
			<Link href={"/bobbie_leigh/football"}>Football</Link>
		</div>
	);
}

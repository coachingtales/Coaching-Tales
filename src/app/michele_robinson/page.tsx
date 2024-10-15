import Link from "next/link";
export default function MicheleRobinson() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Michele Robinson</h1>
			<Link href={"/michele_robinson/culture"}>Culture</Link>
			<Link href={"/michele_robinson/football"}>Football</Link>
		</div>
	);
}

import Link from "next/link";
export default function IreneTaylor() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Irene Taylor</h1>
			<Link href={"/irene_taylor/culture"}>Culture</Link>
			<Link href={"/irene_taylor/football"}>Football</Link>
		</div>
	);
}

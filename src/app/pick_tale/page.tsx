import Link from "next/link";
export default function PickTale() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Choose Coach</h1>
			<Link href={"/irene_taylor"}>Irene Taylor</Link>
			<Link href={"/bobbie_leigh"}>Bobbie Leigh</Link>
			<Link href={"/michele_robinson"}>Michele Robinson</Link>
		</div>
	);
}

import Link from "next/link";
export default function Culture() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/Culture Path
			</h1>
			<Link href={"/bobbie_leigh/culture/page_one"}>
				BobbieLeigh/Culture/Page One
			</Link>
		</div>
	);
}

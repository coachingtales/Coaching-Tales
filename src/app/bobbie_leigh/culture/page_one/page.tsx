import Link from "next/link";
export default function PageOne() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/Culture/Page One
			</h1>
			<Link href={"/bobbie_leigh/culture/page_two"}>
				BobbieLeigh/Culture/Page Two
			</Link>
			<Link href={"/bobbie_leigh/culture/page_three"}>
				BobbieLeigh/Culture/Page Three
			</Link>
		</div>
	);
}

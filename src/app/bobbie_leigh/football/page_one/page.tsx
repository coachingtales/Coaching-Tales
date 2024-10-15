import Link from "next/link";
export default function PageOne() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/Football/Page One
			</h1>
			<Link href={"/bobbie_leigh/football/page_two"}>
				BobbieLeigh/Football/Page Two
			</Link>
			<Link href={"/bobbie_leigh/football/page_three"}>
				BobbieLeigh/Football/Page Three
			</Link>
		</div>
	);
}

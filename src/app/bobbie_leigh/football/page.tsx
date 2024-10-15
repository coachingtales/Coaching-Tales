import Link from "next/link";
export default function Football() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">
				BobbieLeigh/football Path
			</h1>
			<Link href={"/bobbie_leigh/football/page_one"}>
				BobbieLeigh/Football/Page One
			</Link>
		</div>
	);
}

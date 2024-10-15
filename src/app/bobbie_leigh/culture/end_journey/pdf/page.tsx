import Link from "next/link";
export default function Pdf() {
	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">Save PDF</h1>
			<Link href={"/"}>Skip</Link>
		</div>
	);
}

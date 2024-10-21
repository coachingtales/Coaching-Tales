import Link from "next/link";

const colors = ["bg-[#00AFB9]", "bg-[#F07167]", "bg-[#0081A7]"];

export default function Home() {
	return (
		<main className="relative w-dvw h-dvh grid place-content-center bg-[#dfded4] overflow-hidden">
			<h1 className="font-bold z-10 absolute top-20 left-20 text-6xl text-slate-800">
				Coaching Tales
			</h1>
			{colors.map((color, index) => {
				return (
					<span
						key={color}
						className={`w-[95dvw] h-screen ${color} absolute rounded-br-full shadow-2xl ${index === 2 ? "left-[-20%]" : index === 1 ? "left-[-10%]" : ""}`}
					/>
				);
			})}
			<Link
				href="/chooseCoach"
				className="text-slate-800 px-6 py-4 rounded-xl font-bold w-fit text-2xl text-center border-[#B4B4B4] border-[1px]  bg-[#ebeae5] absolute bottom-10 right-10 shadow-lg"
			>
				Start your journey
			</Link>
		</main>
	);
}

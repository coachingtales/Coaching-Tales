import Link from "next/link";
import coachData from "@/app/data/coachData.json";

const colors = [
	coachData.details[0].hex,
	coachData.details[1].hex,
	coachData.details[2].hex,
];

export default function Home() {
	return (
		<main className="relative w-screen h-screen p-4 grid grid-cols-10 grid-rows-10 bg-[#dfded4] overflow-hidden">
			<h1 className="font-bold z-10 col-start-1 row-start-1 row-span-2 flex justify-center items-center col-span-7 text-6xl text-slate-800">
				Coaching Tales
			</h1>
			{colors.map((color, index) => {
				return (
					<span
						key={color}
						className={`w-[95dvw] h-screen absolute rounded-br-full shadow-2xl ${index === 2 ? "left-[-20%]" : index === 1 ? "left-[-10%]" : ""}`}
						style={{
							backgroundColor: color,
						}}
					/>
				);
			})}
			<Link
				href="/chooseCoach"
				className="text-slate-800 rounded-xl h-fit p-4 font-bold text-2xl text-center border-[#B4B4B4] border-[1px]  bg-[#ebeae5] row-start-10 col-start-7 lg:col-start-8 lg:col-span-3 col-span-4 shadow-lg"
			>
				Start your journey
			</Link>
		</main>
	);
}

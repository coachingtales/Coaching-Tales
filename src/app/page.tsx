import Link from "next/link";
import coachData from "@/app/data/coachData.json";
import Image from "next/image";

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
			<Image
				className="z-50 col-start-2 col-span-5 scale-75 lg:col-span-3 lg:col-start-3 xl:col-span-3 xl:col-start-3 row-start-3 row-span-4 xl:row-span-7 xl:row-start-2"
				src="/icons/strategy.png"
				alt="strategy"
				fill
			/>
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
				className="text-slate-800 flex flex-row justify-center items-center w-full gap-5 text-nowrap rounded-xl h-fit p-4 font-bold text-2xl text-center border-[#B4B4B4] border-[1px]  bg-[#ebeae5] row-start-10 col-start-6 lg:col-start-7 lg:col-span-4 col-span-5 shadow-lg"
			>
				Start your journey
				<Image
					src="/icons/letsbegin.png"
					alt="start icon"
					width={48}
					height={48}
				/>
			</Link>
		</main>
	);
}

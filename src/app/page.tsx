import Link from "next/link";
import coachData from "@/app/data/coachData.json";
import Image from "next/image";

const colors = [
	{
		hex: coachData.details[0].hex ?? "#F2CC8F",
		position: "left-[20%] top-[10%]",
		z: "30",
	},
	{
		hex: coachData.details[1].hex ?? "#E07A5F",
		position: "left-[25%] top-[20%]",
		z: "20",
	},
	{
		hex: coachData.details[2].hex ?? "#81B29A",
		position: "left-[30%] top-[30%]",
		z: "10",
	},
];

export default function Home() {
	return (
		<main className="w-screen h-screen grid place-content-center relative overflow-hidden bg-[#EEEDEA]">
			{colors.map((color) => (
				<div
					key={color.hex}
					className={`${color.position} -translate-x-1/2 blur-sm -translate-y-1/2 rounded-full w-[140vw] h-[140vw] absolute shadow-xl`}
					style={{
						background: color.hex,
						zIndex: color.z,
					}}
				/>
			))}
			<div className="flex xl:flex-row flex-col gap-4 items-center justify-center">
				<h1 className="text-[10vmin] z-50 text-slate-800 font-bold">
					Coaching Tales
				</h1>
				<Image
					src={"/icons/strategy.png"}
					alt="clipboard icon"
					width={400}
					height={400}
					className="w-[30vmin] rotate-[10deg] z-50"
				/>
			</div>
			<button
				type="button"
				className="hover:-translate-y-1 transition-all duration-300 ease-in-out active:scale-95 px-4 py-2 border-2 text-slate-800 bg-[#EEEDEA] text-[4vmin] lg:text-[3vmin] z-50 border-slate-50 flex flex-row justify-center items-center gap-4 rounded-lg shadow-lg absolute bottom-5 right-5"
			>
				<Link href={"/chooseCoach"}>Let's Begin</Link>
				<Image
					src={"/icons/letsbegin.png"}
					alt="Footballer icon"
					width={100}
					height={100}
					className="w-[6vmin]"
				/>
			</button>
		</main>
	);
}

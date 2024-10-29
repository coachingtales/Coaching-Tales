"use client";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";

const EndPage = ({ params }: Props) => {
	const { choices, coach, path } = params;
	const { name, color, nextCoach, prevCoach } = useCoachDetails({
		coach,
		path,
		choices,
	} as {
		coach: string;
		path: string;
		choices: string;
	});

	if (!choices) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-screen h-screen grid grid-rows-10 grid-cols-10 relative overflow-hidden bg-[#F5F5F5]">
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-[-10%] lg:translate-y-[-10%] lg:translate-x-[-10%] z-10 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: color,
				}}
			/>
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-0 lg:translate-y-[-10%] lg:translate-x-0 z-0 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: prevCoach?.hex,
				}}
			/>
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-[-5%] lg:translate-y-[-10%] lg:translate-x-[-5%] z-0 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: nextCoach?.hex,
				}}
			/>
			<h1 className="lg:col-start-2 lg:col-span-5 lg:row-start-4 lg:row-span-2 col-start-3 row-start-5 z-50 col-span-6 text-4xl flex justify-center items-center text-center">
				End of {name.split(" ")[0]}'s pathway
			</h1>
			<div className="relative z-50 lg:col-start-7 lg:row-start-3 aspect-square lg:col-span-3 col-start-4 row-start-2 col-span-4 row-span-3">
				<Image
					className="scale-75"
					src="/icons/stopwatch.png"
					alt="stopwatch icon"
					fill
				/>
			</div>
			<Link
				href={`/${coach}/choose_path/${path}/${choices}/end/save_pdf`}
				className="text-slate-800 z-50 rounded-xl h-fit p-4 font-bold text-2xl text-center border-slate-200 border-2 row-start-9 col-start-2 col-span-4 m-4 shadow-lg"
			>
				Save PDF
			</Link>
			<Link
				href="/chooseCoach"
				className="text-slate-800 z-50 rounded-xl h-fit p-4 font-bold text-2xl text-center border-slate-200 border-2 row-start-9 col-start-6 col-span-4 m-4 shadow-lg"
			>
				Play again
			</Link>
		</div>
	);
};

export default EndPage;

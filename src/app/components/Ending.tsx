"use client";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";

const EndPage = ({ params }: Props) => {
	const { choices, coach, path } = params;
	const { name, color, nextCoach, prevCoach, PDF } = useCoachDetails({
		coach,
		path,
		choices,
	} as {
		coach: string;
		path: string;
		choices: string;
	});

	const componentPathTitle = PDF.component_path?.title || "No title available";
	const componentChoiceTitle =
		PDF.component_choice?.title || "No title available";
	const componentChoiceImage = PDF.component_choice?.image_link || "";
	const componentPathImage = PDF.component_path?.image_link || "";

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
			<h1 className="w-full h-full font-bold col-start-2 xl:col-start-3 xl:col-span-5 row-start-1 col-span-8 lg:col-start-3 lg:col-span-5 z-50 text-3xl flex items-center justify-center row-span-1">
				End of {name.split(" ")[0]}'s pathway
			</h1>
			<p className="z-50 row-start-2 col-start-2 lg:col-start-2 xl:col-start-3 xl:col-span-5 col-span-8 lg:col-span-7 row-span-1 flex justify-center xl:items-cen text-xl">
				Here is a recap of the route you took through {name.split(" ")[0]}'s
				biography
			</p>
			<h2 className="z-50 col-start-2 text-center lg:col-start-2 row-start-4 col-span-3 row-span-1 lg:row-span-3 flex justify-center items-center text-xl">
				{componentChoiceTitle}
			</h2>
			<div className="z-50 col-start-5 m-4 lg:col-start-5 lg:row-span-6 w-[40%] xl:w-[30%] gap-4 h-full lg:row-start-3 row-start-3 flex flex-col justify-center items-center row-span-5 col-span-5 lg:col-span-4 relative">
				<div className="relative w-full aspect-square shadow-xl">
					<Image
						className="rounded-xl"
						src={componentChoiceImage}
						fill
						alt={name}
						objectFit="cover"
						objectPosition="top"
					/>
				</div>
				<div className="relative w-full aspect-square shadow-xl">
					<Image
						className="rounded-xl"
						src={componentPathImage}
						fill
						alt={name}
						objectFit="cover"
						objectPosition="top"
					/>
				</div>
			</div>
			<h2 className="z-50 col-start-2 lg:col-start-2 lg:row-span-3 row-start-6 text-center col-span-3 row-span-1 flex justify-center items-center text-xl">
				{componentPathTitle}
			</h2>
			<Link
				href="/chooseCoach"
				className="z-50 rounded-xl h-full p-4 flex justify-center items-center row-start-9 row-span-2 col-start-4 col-span-4 m-4"
			>
				<span className="text-slate-800 z-50 rounded-xl h-fit p-4 -translate-y-2 font-bold text-2xl text-center border-slate-200 border-2 shadow-lg">
					Play again
				</span>
			</Link>
		</div>
	);
};

export default EndPage;

"use client";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";
import { useState } from "react";
import CustomAudioPlayer from "./customAudioPlayer";

const Path = ({ params }: Props) => {
	const [content, setContent] = useState("audio");
	const { coach, path, choices } = params;
	const { details, detailsTitle, detailsAudio, detailsImage, color } =
		useCoachDetails({ coach, path, choices } as {
			coach: string;
			path: string;
		});

	if (!coach) {
		return <div>Loading...</div>;
	}

	const handleAudioEnd = () => {
		setContent("next");
	};

	return (
		<div className="w-screen h-screen grid p-2 grid-rows-10 grid-cols-10 relative overflow-hidden bg-[#F5F5F5]">
			<CustomAudioPlayer
				audioLink={detailsAudio}
				audioTrans={details}
				onAudioEnd={handleAudioEnd}
				opacity={content}
			/>
			<div
				className="absolute w-[100vw] scale-125 lg:scale-110 h-[100vw] z-0 rounded-full bottom-1/3 lg:bottom-[-10%] lg:right-[15%] right-0"
				style={{ background: color }}
			/>
			{content === "text" && (
				<h1 className="col-start-2 lg:row-start-2 col-span-8 place-content-center text-3xl row-start-1 z-50">
					{detailsTitle}
				</h1>
			)}
			{content === "audio" && (
				<h1 className="col-start-2 lg:row-start-2 col-span-8 place-content-center text-3xl row-start-1 z-50">
					{detailsTitle}
				</h1>
			)}
			{content === "text" && (
				<div className="row-start-2 overflow-scroll max-h-96 text-xl col-start-2 lg:col-span-7 col-span-8 row-span-8 lg:row-span-7 lg:row-start-3 lg:col-start-2 z-50">
					{details.split("\n\n").map((paragraph, index) => {
						const key = `paragraph-${index}`;
						return (
							<p key={key} className="mb-2">
								{paragraph}
							</p>
						);
					})}
				</div>
			)}
			{content === "audio" && (
				<div className="row-start-2 col-start-2 lg:col-span-7 col-span-8 row-span-7 lg:row-span-7 lg:row-start-3 lg:col-start-2 z-50">
					<div className="w-full h-full relative rounded-md">
						{detailsImage && (
							<Image
								src={detailsImage}
								alt={detailsTitle}
								fill
								style={{ objectFit: "cover" }}
								className="rounded-xl object-top"
								priority
							/>
						)}
					</div>
				</div>
			)}
			{content === "next" && (
				<>
					<Link
						className="p-2 rounded-xl font-bold text-2xl border-2 border-slate-200 z-50 text-center shadow-lg lg:col-start-4 col-start-3 row-start-2 lg:row-start-4 col-span-6 lg:col-span-4 flex justify-center items-center"
						href={`/${coach}/choose_path/${path}/${choices}/end`}
					>
						End
					</Link>
					<Link
						href="/"
						className="p-2 z-50 rounded-xl border-2 border-slate-200 font-bold text-2xl text-center shadow-lg lg:col-start-4 col-start-3 row-start-4 lg:row-start-6 col-span-6 lg:col-span-4 flex justify-center items-center"
					>
						Restart
					</Link>
				</>
			)}
			<div className="lg:row-start-2 lg:row-span-8 z-50 lg:col-start-10 col-start-2 row-start-10 mb-10 lg:mb-0 lg:mr-10 col-span-8 row-span-1 flex-row lg:flex-col flex items-center justify-between">
				<button
					type="button"
					title="Transcript"
					onClick={() => setContent("text")}
					className={`z-50 transition-all duration-300 ease-in-out ${content === "text" ? "bg-[#00C5FF] shadow-lg scale-105" : "bg-[#F5F5F5] shadow-sm scale-100"} p-2 rounded-xl font-bold w-fit`}
				>
					<Image
						priority
						src="/icons/text.png"
						width={56}
						height={56}
						className={`${content === "text" ? "invert" : ""}`}
						alt="text icon"
					/>
				</button>
				<button
					type="button"
					title="Audio"
					onClick={() => setContent("audio")}
					className={`z-50 transition-all duration-300 ease-in-out ${content === "audio" ? "bg-[#00C5FF] shadow-lg scale-105" : "bg-[#F5F5F5] shadow-sm scale-100"} p-2 rounded-xl font-bold w-fit`}
				>
					<Image
						src="/icons/headphones.png"
						width={56}
						height={56}
						className={`${content === "audio" ? "invert" : ""}`}
						alt="headphone icon"
					/>
				</button>
				<button
					type="button"
					onClick={() => setContent("next")}
					title="Next Choice"
					className={`z-50 transition-all duration-300 ease-in-out ${content === "next" ? "bg-[#00C5FF] shadow-lg scale-105" : "bg-[#F5F5F5] shadow-sm scale-100"} p-2 rounded-xl font-bold w-fit`}
				>
					<Image
						src="/icons/next.png"
						width={56}
						height={56}
						className={`${content === "next" ? "invert" : ""}`}
						alt="next choice icon"
					/>
				</button>
			</div>
		</div>
	);
};

export default Path;

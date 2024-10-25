"use client";
import Image from "next/image";
import Link from "next/link";
import useCoachNavigation from "@/app/hooks/useCoachNavigation";
import useCoachDetails from "../hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachPath = ({ params }: Props) => {
	const { coach } = params;
	const { name, color, coachImage, location, active, born } = useCoachDetails({
		coach,
	} as {
		coach: string;
	});

	if (!coach) {
		return <h1>No Coach Found</h1>;
	}

	return (
		<div className="w-screen h-screen relative grid grid-rows-[100px_1fr] overflow-hidden pointer-events-none bg-[#EEEDEA]">
			<h1 className="text-center place-self-center text-6xl font-bold z-50">
				Pick a Tale
			</h1>

			<div className="relative">
				<div
					className="z-0 w-[1000px] h-[1000px] rounded-full absolute lg:top-[-5%] top-0 right-[-10%] lg:right-0 shadow-2xl"
					style={{
						background: color,
					}}
				/>
				<div className="z-50 w-full h-full h-600px grid grid-cols-[45%_50%] grid-rows-[200px_1fr_1fr] gap-5">
					<h2 className="z-50 p-4 lg:p-0 text-5xl font-bold lg:col-start-2 row-start-1 col-start-1 col-end-3 self-end lg:self-end lg:row-start-1 justify-self-center lg:justify-self-start">
						{name}
					</h2>
					<div className="z-50 flex flex-col gap-2 self-center text-2xl row-start-2 col-start-2">
						<p>
							Location: <span className="font-bold">{location}</span>
						</p>
						<p>
							Born: <span className="font-bold">{born}</span>
						</p>
						<p>
							Active: <span className="font-bold">{active}</span>
						</p>
					</div>
					<Image
						src={coachImage}
						alt={name}
						width={530}
						height={530}
						className="z-40 absolute bottom-0 left-0"
					/>
					<div className="z-40 flex justify-evenly gap-2 col-start-2 row-start-3">
						<Link
							className="text-2xl h-fit pointer-events-auto px-6 py-4 rounded-xl font-bold w-fit text-center shadow-2xl border-[3px] border-slate-800"
							href={`/${coach}/choose_path/football`}
							style={{ background: color }}
						>
							Football
						</Link>
						<Link
							className="text-2xl pointer-events-auto px-6 py-4 rounded-xl font-bold w-fit h-fit text-center shadow-2xl border-[3px] border-slate-800"
							href={`/${coach}/choose_path/culture`}
							style={{ background: color }}
						>
							Culture
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachPath;

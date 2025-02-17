"use client";
import Image from "next/image";
import Link from "next/link";
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
					className="w-[100vw] h-[100vw] rounded-full absolute scale-125 lg:scale-100 translate-y-[15%] lg:translate-y-0 transition-all duration-300 ease-in-out shadow-2xl"
					style={{
						background: color,
					}}
				/>
				<div className="z-50 w-full h-full grid grid-cols-10 grid-rows-10 gap-4">
					<h2 className="z-50 text-4xl font-bold col-start-3 text-nowrap text-center lg:text-left row-start-2 col-span-6 lg:row-start-3 lg:col-start-6">
						{name}
					</h2>
					<div className="z-50 flex flex-col gap-2 text-left lg:row-start-4 lg:row-span-2 justify-center items-start text-2xl row-start-2 col-start-6 row-span-4 col-span-4">
						{location && (
							<p>
								Location: <span className="font-bold">{location}</span>
							</p>
						)}
						{born && (
							<p>
								Born: <span className="font-bold">{born}</span>
							</p>
						)}
						{active && (
							<p>
								Active: <span className="font-bold">{active}</span>
							</p>
						)}
					</div>
					<div className="relative row-start-3 scale-125 lg:scale-100 lg:row-start-1 xl:row-start-2 xl:row-span-9 xl:col-span-8 xl:col-start-3 col-start-1 col-span-7 row-span-10">
						{coachImage && (
							<Image
								src={coachImage}
								alt={name}
								width={500}
								height={500}
								priority
							/>
						)}
					</div>
					<Link
						className="text-2xl z-50 pointer-events-auto row-start-6 col-start-6 col-span-4 flex justify-center items-center rounded-xl font-bold text-center shadow-2xl border-2 border-slate-200"
						href={`/${coach}/choose_path/Football`}
						style={{ background: color }}
					>
						Football
					</Link>
					<Link
						className="text-2xl z-50 col-start-6 col-span-4 row-start-7 flex justify-center items-center pointer-events-auto rounded-xl font-bold text-center shadow-2xl border-2 border-slate-200"
						href={`/${coach}/choose_path/Culture`}
						style={{ background: color }}
					>
						Culture
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CoachPath;

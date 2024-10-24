"use client";
import Image from "next/image";
import Link from "next/link";
import useCoachNavigation from "@/app/hooks/useCoachNavigation";
import coachData from "@/app/data/coachData.json";
import useCoachDetails from "../hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachDetailsPage = ({ params }: Props) => {
	const { coach } = params;
	const { id } = useCoachNavigation();
	const { name, color, coachImage } = useCoachDetails({ coach } as {
		coach: string;
	});

	if (!coach) {
		return <h1>No Coach Found</h1>;
	}

	console.log(id);

	return (
		<div className="w-full h-full relative bg-[#F5F5F5] overflow-hidden pointer-events-none">
			<div className="h-screen w-screen fixed grid grid-rows-[100px,1fr]">
				<h1 className="w-full h-fit text-center font-bold text-[9dvw] p-2 z-50">
					Pick a Tale
				</h1>
				<div
					className={
						"w-full pointer-events-none h-full lg:bottom-0 top-[-10%] lg:top-0 left-0 absolute transition-all duration-300 rounded-t-full shadow-2xl"
					}
					style={{
						zIndex: `${id + 1 * 5}`,
						background: color,
						transform: "translateX(0) translateY(20vh)",
					}}
				/>
				<div
					className={
						"w-screen h-screen grid grid-rows-[100px, 1fr] lg:grid-cols-2 place-items-center text-[7dvw] transition-all duration-300"
					}
					style={{
						transform: "translateX(0) translateY(0)",
						zIndex: `${id + 1 * 6}`,
					}}
				>
					<div className="w-fit p-6 lg:justify-self-end self-end lg:self-center lg:row-start-1 lg:col-start-2 pointer-events-auto">
						<div className="w-fit font-bold text-center lg:text-left">
							{name}
						</div>
					</div>
					<div className="w-fit h-full lg:justify-self-end lg:row-start-1 lg:col-start-1">
						<Image src={coachImage} alt={name} width={500} height={500} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoachDetailsPage;
